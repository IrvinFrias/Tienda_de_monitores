import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksService} from "./books.service";
import {BooksComponent} from "./books.component";
import {MonitorComponent} from "./monitor/monitor.component";



@NgModule({
  declarations: [BooksComponent, MonitorComponent],
  providers: [BooksService],
  imports: [CommonModule],
  exports:[BooksComponent]
})
export class BooksModule { }
