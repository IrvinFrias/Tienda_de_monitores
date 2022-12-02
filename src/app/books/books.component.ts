import {Component, OnInit} from '@angular/core';
interface Monitor{
  alt: string
  modelo: string
  src: string
  price: number
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  monitors: Monitor[] = [
    {
      alt: 'monitor 24 inches',
      modelo: 'Monitor Dell 24 - P2422H',
      src: 'https://snpi.dell.com/snp/images/products/large/es-es~210-AZYX/210-AZYX.jpg',
      price:1000

    },
    {
      alt: 'monitor 24 inches',
      modelo: ' monitor Dell UltraSharp 24 - U2422H',
      src: 'https://snpi.dell.com/snp/images/products/large/es-es~210-AYUI/210-AYUI.JPG',
      price:2000

    },
    {
      alt: 'monitor 24 inches',
      modelo: ' monitor Dell 24 - S2421HS',
      src: 'https://snpi.dell.com/snp/images/products/large/es-es~210-AXKQ_V4/210-AXKQ_V4.jpg',
      price:3000
    },
    {
      alt: 'monitor 24 inches',
      modelo: ' monitor Dell 24 con concentrador USB-C: P2423DE',
      src: 'https://snpi.dell.com/snp/images/products/large/es-es~210-BDDW/210-BDDW.jpg',
      price:4000
    }
  ]


  constructor() {
  }

  isShowing: boolean = true;


  ngOnInit(): void{

  }

}
