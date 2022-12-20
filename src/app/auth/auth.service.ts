import { Injectable } from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut} from "firebase/auth";
import {LoginForm, RegisterForm} from "../types/Auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  passwordMatched:boolean = false;
  isLogin: boolean = false;

  constructor(private router: Router) { }

  login(form: LoginForm): void{

    if (this.isLogin) return;

    this.isLogin = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth,form.email, form.password)
      .then((userCredential) => {
        // Signed in
        this.isAuthenticated = true;
        this.router.navigate([''])
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentials does not match our record');
        this.isAuthenticated = false;
      }).finally(()=>(this.isLogin = false));
  }
  register(form: RegisterForm): void{
    if(this.isLogin) return;
    this.isLogin = true;
    if(form.password !== form.confirmPassword){
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;

      }).finally(()=>this.isLogin = false);
  }

  logOut(): void{
    const auth = getAuth();
    signOut(auth).then(()=>{
      //Sign-out succesful.
      this.isAuthenticated = false;
      this.router.navigate(['login'])
    }).catch((error)=>{
      //An error happened.
    })
  }




}
