import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  alt: string = 'Monitor'
  modelo: string = 'Monitor Dell 24 - P2422H'
  src: string = 'https://snpi.dell.com/snp/images/products/large/es-es~210-AZYX/210-AZYX.jpg'
  constructor() {
  }
  alt2: string = 'Monitor';
  modelo2: string = ' Monitor Dell UltraSharp 24 - U2422H';
  src2: string = 'https://snpi.dell.com/snp/images/products/large/es-es~210-AYUI/210-AYUI.JPG'

  isDisable: boolean = false;

  handleClick(): void{
    console.log('Hola mundo');
  }
  inputName: string = '';
  handleInput(event: any): void{
    this.inputName = event.target.value;
  }

  ngOnInit(): void{

  }

}
