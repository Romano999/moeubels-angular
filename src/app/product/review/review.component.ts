import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Review } from 'src/app/core/models/review';
import { ReviewRequest } from 'src/app/core/requests/review-request';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit, OnChanges {

  @Input() reviews: Review[] = [];
  @Output() reviewAttempt = new EventEmitter<ReviewRequest>();
  reviewsIsEmpty : boolean = false;

  ngOnInit(): void {
    // this.reviews.forEach( review => console.log(review) )
    // if (this.reviews.length === 0) {
    //   this.reviewsIsEmpty = true
    // }

    // console.log(`Reviews: ${this.reviews}`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ok")

    for (let propName in changes) {
      let change = changes[propName];
      console.dir(change);
      if(change.isFirstChange()) {
        console.log(`first change: ${propName}`);
      } else {
        console.log(`prev: ${change.previousValue}, cur: ${change.currentValue}`);
      }
    }
  }


  onReviewAttempt(reviewRequest: ReviewRequest) {
    this.reviewAttempt.emit(reviewRequest);
  }
}
