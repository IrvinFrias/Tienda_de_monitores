import { Component } from '@angular/core';
import {LoginForm} from "../../types/Auth";
import {query} from "@angular/animations";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: LoginForm = {
    email:  '',
    password: '',
  }
  isLogin: boolean = false;
  submit(): void{
    if (this.isLogin) return;

    this.isLogin = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth,this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, userCredential);
        alert('login succes');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentiasl does not match our record');
      }).finally(()=>(this.isLogin = false));

  }

}
