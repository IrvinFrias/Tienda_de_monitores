import { Injectable } from '@angular/core';
import {Monitor} from "../types/Monitor";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  card: Monitor[] = []

  constructor() { }

  add(monitor: Monitor): void{
    this.card.push(monitor)
  }

  get(){
    return this.card;
  }
  remove(monitor: Monitor): void{
    this.card = this.card.filter((m) =>{return m !== monitor});
  }
}
