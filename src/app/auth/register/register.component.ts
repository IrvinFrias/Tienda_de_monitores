import { Component } from '@angular/core';
import {LoginForm, RegisterForm} from "../../types/Auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: RegisterForm = {
    email:  '',
    password: '',
    confirmPassword: ''
  }
  passwordMatched:boolean = false;

  submit(): void{
    if(this.form.password !== this.form.confirmPassword){
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        // ...
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });


  }

}
