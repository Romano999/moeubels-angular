import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Review } from 'src/app/core/models/review';
import { ReviewRequest } from 'src/app/core/requests/review-request';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnChanges {

  @Input() reviews: Review[] = [];
  @Output() reviewAttempt = new EventEmitter<ReviewRequest>();
  reviewsIsEmpty : boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let change = changes[propName];
      if(change.isFirstChange()) {

      } else {

      }
    }
  }


  onReviewAttempt(reviewRequest: ReviewRequest) {
    this.reviewAttempt.emit(reviewRequest);
  }
}
