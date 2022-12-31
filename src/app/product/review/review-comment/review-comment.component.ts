import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewRequest } from 'src/app/core/requests/review-request';
import { CustomSnackbarService } from 'src/app/core/services/custom-snackbar.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-review-comment',
  templateUrl: './review-comment.component.html',
  styleUrls: ['./review-comment.component.scss']
})
export class ReviewCommentComponent implements OnInit {
  @Output() reviewAttempt = new EventEmitter<ReviewRequest>();
  reviewForm !: FormGroup;

  constructor(
    private userSevice: UserService,
    private customSnackbarService: CustomSnackbarService,
  ) { }

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      "comment": new FormControl(null, [
        Validators.required
      ]),
      "rating": new FormControl(null, [
        Validators.required
      ])
    });
  }

  onReviewAttempt() {
    if (this.reviewForm.invalid) {
      this.customSnackbarService.open("Please fill in all fields!")
    } else {
      let review: ReviewRequest = {
        comment: this.reviewForm.value['comment'],
        rating: this.reviewForm.value['rating'],
        actorId: '',
        productId: ''
      }
      this.reviewAttempt.emit(review);
    }
  }
}
