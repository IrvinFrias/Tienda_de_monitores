import { Component } from '@angular/core';
import {LoginForm} from "../../types/Auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: LoginForm = {
    email:  '',
    password: '',
  }
  submit(): void{
    console.log(this.form);
    alert('this form works');
  }

}
