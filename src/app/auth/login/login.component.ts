import { Component } from '@angular/core';
import {LoginForm} from "../../types/Auth";
import {query} from "@angular/animations";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {AuthService} from "../auth.service";

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

  constructor(private authService: AuthService) {
  }
  isLogin(){
    return this.authService.isLogin;
  }


  submit(): void{
    this.authService.login(this.form);
  }

}
