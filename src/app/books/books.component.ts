import {Component, OnDestroy, OnInit} from '@angular/core';
import {Monitor} from "../types/Monitor";
import {BooksService} from "./books.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy{
  monitors: Monitor[] = [];


  constructor(private booksService: BooksService) { //Dependency Injection
    // the construtor is the first thing execute whe the user load the page.
    //console.log({onConstructor: 'first thing that renders'});
  }

  isShowing: boolean = true;



 /*Lyfe cicle of the component*/
  ngOnInit(): void{ //here we can fetch some data from API because is the second one thing that execute when we run
    // the app.
    //console.log({onInit: 'second thing that renders'});
    this.monitors = this.booksService.getBooks();

  }
  ngOnDestroy(): void {

  }

  /*Methods*/

}
