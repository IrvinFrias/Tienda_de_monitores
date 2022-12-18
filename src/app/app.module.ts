import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {BooksModule} from "./books/books.module";
import { CardComponent } from './card/card.component';
import { CardMonitorsComponent } from './card/card-monitors/card-monitors.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardMonitorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
