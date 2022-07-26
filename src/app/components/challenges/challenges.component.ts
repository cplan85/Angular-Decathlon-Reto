import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  parsedArray: any[] = [];

  productsMock = 
  `[{
    "_id": {
      "$oid": "62dfc2810c1410270048577d"
    },
    "productId": 0,
    "brand": "Decathlon",
    "category": "Zapatillas",
    "description": "Zapatillas para amateur",
    "image": "https://contents.mediadecathlon.com/p2155651/k$81fc073b39ce6c1402394f10a36c303b/sq/zapatillas-running-hombre-asics-gel-windhawk-azul-blanco.jpg?format=auto&f=650x650",
    "price": 98.9,
    "title": "Zapatillas runner D1000"
  },{
    "_id": {
      "$oid": "62dfc3cf0c1410270048577f"
    },
    "productId": 1,
    "brand": "Decathlon",
    "category": "Zapatillas",
    "description": "Zapatillas para profesional",
    "image": "https://contents.mediadecathlon.com/p2163732/k$6bbf369f34069ad7695a759107dc80e9/sq/zapatillas-running-asics-gel-glyde-3-hombre-negro-amarillo.jpg?f=960x960",
    "price": 158.49,
    "title": "Zapatillas runner D2000"
  }]`

  getJSON() {
    const parsedProducts: any[] = JSON.parse(this.productsMock);

    parsedProducts.forEach(item => {
      this.parsedArray.push(item)
    })
  }

  constructor() { }

  ngOnInit(): void {

  this.getJSON()
  }

}
