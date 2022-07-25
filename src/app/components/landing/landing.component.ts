import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
