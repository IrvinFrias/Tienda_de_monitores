import {Component, OnChanges, OnInit} from '@angular/core';
import {CardService} from "../services/card.service";
import {Monitor} from "../types/Monitor";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {
  card: Monitor[] = [];



  constructor(public cardService: CardService) {

  }
  ngOnChanges(): void{
    console.log('cada que cambia el componente');
}
  ngOnInit() {
    this.card = this.cardService.card;
  }

  getCard(){
    return this.cardService.get();
  }
}
