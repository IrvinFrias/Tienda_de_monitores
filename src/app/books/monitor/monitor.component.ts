import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Monitor} from "../../types/Monitor";


@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit, OnDestroy{
  @Input() monitor: Monitor = {} as Monitor; //sharing data from parent to child
  // https://angular.io/guide/inputs-outputs
  isShowing: boolean = true;
  @Output() monitorEmitter = new EventEmitter<Monitor>;//sharing data from child to parent
  //https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component

  constructor() {
  }

  /*Methods*/
  addToCard(): void {
    this.monitorEmitter.emit(this.monitor)
  }

  /*Lifecycle*/
  ngOnInit(): void{

  }
  ngOnDestroy(): void {
    console.log({onDestroy: 'this destroy a component'});
  }

}
