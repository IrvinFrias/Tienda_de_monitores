import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Monitor} from "../../types/Monitor";
import {CardService} from "../../services/card.service";


@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit, OnDestroy{
  @Input() monitor: Monitor = {} as Monitor; //sharing data from parent to child
  // https://angular.io/guide/inputs-outputs
  isShowing: boolean = true;
  //@Output() monitorEmitter = new EventEmitter<Monitor>;//sharing data from child to parent
  //https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component

  isInCard: boolean = false;

  constructor(private cardService: CardService ) {
  }

  /*Methods*/
  addToCard(): void {
    this.isInCard = true;
    this.cardService.add(this.monitor);
    //this.monitorEmitter.emit(this.monitor)
  }

  removeFromCard(): void{
    this.isInCard = false;
    this.cardService.remove(this.monitor);
  }

  /*Lifecycle*/
  ngOnInit(): void{

  }
  ngOnDestroy(): void {
    console.log({onDestroy: 'this destroy a component'});
  }

}
