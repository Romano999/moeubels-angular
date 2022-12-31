import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/core/models/review';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent {
  @Input() review!: Review;

  constructor() { }

}
