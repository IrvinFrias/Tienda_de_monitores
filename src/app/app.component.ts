import {Component, Input, OnInit} from '@angular/core';
import {Monitor} from "./types/Monitor";
import firebase from "firebase/compat/app";
import initializeApp = firebase.initializeApp;
import {firebaseConfig} from "../firebase.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Monitores | DELL';
  ngOnInit():void {
    initializeApp(firebaseConfig);
  }

}
