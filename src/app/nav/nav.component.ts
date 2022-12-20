import { Component } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private authService: AuthService) {
  }
  isAuthenticated(){
    return this.authService.isAuthenticated;
  }
  logOut(): void{
    this.authService.logOut();
  }

}
