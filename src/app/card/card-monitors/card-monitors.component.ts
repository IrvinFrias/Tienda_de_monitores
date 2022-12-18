import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Monitor} from "../../types/Monitor";
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-card-monitors',
  templateUrl: './card-monitors.component.html',
  styleUrls: ['./card-monitors.component.css']
})
export class CardMonitorsComponent implements OnInit, OnDestroy{
  constructor(private cardService: CardService) {
  }
  @Input() monitorCard: Monitor = {} as Monitor;

  deleteItem(): void{
    console.log(this.cardService.card);
    this.cardService.remove(this.monitorCard);
    console.log(this.cardService.card);
  }

  ngOnInit(): void {
  }


  ngOnDestroy(): void{
    console.log('hola');
  }

}
