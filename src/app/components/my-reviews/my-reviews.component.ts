import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.scss'],
})
export class MyReviewsComponent implements OnInit {
  myTopReviews = [
    {
      image: '../assets/img/elements/hiking group.jpg',
      hearts: 5000,
      points: 25,
      originalReviewURL: '/productReview/{productId}/1',
      created: '06/22',
      tags: ['outdoors', 'hike & camp', 'exercise', 'extreme weather'],
    },
    {
      image: '../assets/img/elements/beach1.webp',
      hearts: 2700,
      points: 25,
      originalReviewURL: '/productReview/{productId}/1',
      created: '06/22',
      tags: ['summer', 'beach', 'exercise', 'extreme weather'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
