import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatButtonModule } from '@angular/material/button';
import { ReviewComponent } from './review/review.component';
import { ReviewCardComponent } from './review/review-card/review-card.component';
import { StarRating, StarRatingModule } from 'angular-star-rating';
import { MatDividerModule } from '@angular/material/divider';
import { ReviewCommentComponent } from './review/review-comment/review-comment.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent,
    ProductCardComponent,
    ReviewComponent,
    ReviewCardComponent,
    ReviewCommentComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    StarRatingModule.forRoot(),
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class ProductModule { }
