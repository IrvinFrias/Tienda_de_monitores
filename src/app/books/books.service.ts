import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  getBooks(){
    return [
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
      },
      {
        alt: 'monitor 24 inches',
        modelo: 'Dell 24 Monitor – S2421HN',
        src: 'https://snpi.dell.com/snp/images/products/large/en-us~210-AXHJ_V3/210-AXHJ_V3.jpg',
        price: 3000
      },
      {
        alt: 'monitor 24 inches',
        modelo: 'Dell 24 Monitor - S2421H',
        src: 'https://snpi.dell.com/snp/images/products/large/en-us~210-AXHF_v3/210-AXHF_v3.jpg',
        price: 3200
      },
      {
        alt: 'monitor 24 inches',
        modelo: 'Dell 24 Video Conferencing Monitor - S2422HZ',
        src: 'https://snpi.dell.com/snp/images/products/large/en-us~210-BBQX_v2/210-BBQX_v2.jpg',
        price: 5500
      },
      {
        alt: 'monitor 24 inches',
        modelo: 'Dell 24 Monitor - SE2422H',
        src: 'https://snpi.dell.com/snp/images/products/large/en-us~210-AYXT_V1/210-AYXT_V1.jpg',
        price: 2500
      },
      {
        alt: 'monitor 24 inches',
        modelo: 'Dell 24 Monitor – E2422HN',
        src: 'https://snpi.dell.com/snp/images/products/large/en-us~210-BBWF/210-BBWF.jpg',
        price: 3000
      },
      {
        alt: 'monitor 24 inches',
        modelo: 'Dell UltraSharp 24 USB-C Hub Monitor – U2422HE',
        src: 'https://snpi.dell.com/snp/images/products/large/en-us~210-AYZC/210-AYZC.jpg',
        price: 8000
      },
      {
        alt: 'monitor 24 inches',
        modelo: 'Dell 24 Curved Gaming Monitor - S2422HG',
        src: 'https://snpi.dell.com/snp/images/products/large/en-us~210-AYZJ_v1/210-AYZJ_v1.jpg',
        price: 6000
      },
      {
        alt: 'monitor 24 inches',
        modelo: 'Dell 24 Video Conferencing Monitor - C2422HE',
        src: 'https://snpi.dell.com/snp/images/products/large/en-us~210-aypj_v1/210-aypj_v1.jpg',
        price: 7000
      },
      {
        alt: 'monitor 24 inches',
        modelo: 'Dell 24 Gaming Monitor - G2422HS',
        src: 'https://snpi.dell.com/snp/images/products/large/en-us~210-BDPW_V1/210-BDPW_V1.jpg',
        price: 4500
      }

    ]
  }


  constructor() { }
}
