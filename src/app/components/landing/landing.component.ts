import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

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

  userData = [{
    "_id": {
      "$oid": "62dfc5060c14102700485782"
    },
    "age": 23,
    "country": "EEUU",
    "mail": "marcsmith@hotmail.com",
    "recomendation": [
      {
        "recomendationId": 0,
        "text": "My recomendation ....",
        "likeCount": 23,
        "productId": 1,
        "reviewsAvg": 4.2,
        "tags": [
          "Zapatillas",
          "Runners"
        ],
        "created": {
          "$date": {
            "$numberLong": "980982000000"
          }
        },
        "originalreviewURL": "endpoint producte",
        "image": "sdafds",
        "rewards": "125"
      }
    ],
    "sex": "male",
    "userId": 0,
    "comments": [
      {
        "recommendationId": 1,
        "commentId": 0,
        "text": "Me ha gustado mucho este producto",
        "like": "1",
        "rewards": "8"
      }
    ]
  },{
    "_id": {
      "$oid": "62dfc9830c14102700485787"
    },
    "age": 33,
    "country": "France",
    "mail": "ellensmith@hotmail.com",
    "recomendation": [
      {
        "recomendationId": 1,
        "text": "My recomendation ....",
        "likeCount": 5,
        "productId": 1,
        "reviewsAvg": 3,
        "tags": [
          "Zapatillas",
          "Runners"
        ],
        "created": {
          "$date": {
            "$numberLong": "980982000000"
          }
        },
        "originalreviewURL": "endpoint producte",
        "image": "sdafds",
        "rewards": "75"
      }
    ],
    "sex": "female",
    "userId": 1,
    "comments": [
      {
        "recommendationId": 0,
        "commentId": 0,
        "text": "Me van perfectas",
        "like": "1",
        "rewards": "5"
      }
    ]
  }]

  productsArr = [
    {
      productid: 0,
      name: 'Subea',
      description:
        'Máscara Snorkel Niños Easybreath (6-10 años | Talla XS) Azul',
      price: 24.99,
      image: '../assets/img/elements/snorkel1.jpg',
      reviewAvg: 4.75,
      userReviews: [
        {
          id: 1,
          reviewerEmail: 'johndoe@gmail.com',
          reviewUrl: '/productReview/{productId}/1',
        },
        {
          id: 2,
          reviewerEmail: 'johndoe2@gmail.com',
          reviewUrl: '/productReview/{productId}/2',
        },
      ],
    },
    {
      productid: 1,
      name: 'Domyos',
      description:
        'Short fitness pantalón corto chándal con bolsillo Hombre Domyos FST 120 verde',
      price: 9.99,
      image: '../assets/img/elements/shorts1.jpg',
      reviewAvg: 4.75,
      userReviews: [
        {
          id: 1,
          reviewerEmail: 'janedoe@gmail.com',
          reviewUrl: '/productReview/{productId}/1',
        },
      ],
    },
    {
      productid: 2,
      name: 'Domyos',
      description:
        'Camiseta fitness manga corta 100% algodón Hombre Domyos negro',
      price: 3.99,
      image: '../assets/img/elements/camisa1.jpg',
      reviewAvg: 4.5,
      userReviews: [
        {
          id: 1,
          reviewerEmail: 'janedoe@gmail.com',
          reviewUrl: '/productReview/{productId}/1',
        },
      ],
    },
    {
      productid: 3,
      name: 'Subea',
      description: 'Máscara Snorkel Adulto Easybreath 500 Coral Rosa',
      price: 24.99,
      image: '../assets/img/elements/snorkel2.jpg',
      reviewAvg: 4.5,
      userReviews: [
        {
          id: 1,
          reviewerEmail: 'janedoe@gmail.com',
          reviewUrl: '/productReview/{productId}/1',
        },
      ],
    },
  ];

  featuredPhotosArr = [
    {
      image: '../assets/img/elements/hiking group.jpg',
      hearts: 5000,
      comments: 25,
      originalReviewURL: '/productReview/{productId}/1',
      userImg: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg',
      userName: 'John Doe'
    },
    {
      image: '../assets/img/elements/catalonia-trekking.webp',
      hearts: 2700,
      comments: 49,
      originalReviewURL: '/productReview/{productId}/1',
      userImg: 'https://images.hola.com/us/images/026e-136a35da44e8-70f6d65e9d80-1000/horizontal-1200/quot-madres-paralelas-quot-madrid-photocall.jpg',
      userName: 'Jane Doe'
    },
  ];

  getJSON() {
    const parsedProducts: any[] = JSON.parse(this.productsMock);

    parsedProducts.forEach(item => {
      this.parsedArray.push(item)
    })
  }

  constructor() {}

  ngOnInit(): void {
    this.getJSON()
  }
}
