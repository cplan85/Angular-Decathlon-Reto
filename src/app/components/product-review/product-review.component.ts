import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {

  productReview = 
    {
      image: '../assets/img/elements/hiking group.jpg',
      hearts: 5000,
      points: 25,
      products: [

     {   productPhoto: "../assets/img/elements/shorts1.jpg",
        originalReviewURL: '/productReview/1/1',
        likes: 5000,
        name: "Domyos",
        comments: 26, 
        topReviewDescription: "Jenny makes the BEST training pants. The teachers at my daughters crèche even commented on how much time and effort of cleaning etc the pants saved them! Great service and great product! THANKS!! cassandra",
        created: '05/22',},
        {   productPhoto: "../assets/img/elements/hikingShoe1.jpg",
        originalReviewURL: '/productReview/2/1',
        name: "Subea",
        likes: 5000,
        comments: 26, 
        topReviewDescription: "Soft, cushiony, and comfortable - the Salomon Vaya hiking shoes are a top choice among female hikers. It has gotten the approval of many for its soft yet protective upper, unique ombre design, and roomy toe box that allows the toes to move naturally.",
        created: '06/22',},
        {   productPhoto: "../assets/img/elements/hikingSticks.jpg",
        originalReviewURL: '/productReview/3/1',
        likes: 5000,
        name: "Subea",
        comments: 26, 
        topReviewDescription: "It really helped me on my hike to the Alps",
        created: '03/22',},

      ],
      created: '06/22',
      tags: ['outdoors', 'hike & camp', 'exercise', 'extreme weather'],
    }

  

  constructor() { }

  ngOnInit(): void {
  }

}
