import { Component } from '@angular/core';
import {LoginForm} from "../../types/Auth";
import {query} from "@angular/animations";

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
  submit(): void{
    console.log(this.form);
    alert('this form works');
  }

}
