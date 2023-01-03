import { HttpResponse } from '@angular/common/http';
import { OnChanges, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../core/models/product';
import { Review } from '../core/models/review';
import { ShoppingCartRequest } from '../core/models/shopping-cart-request';
import { ReviewRequest } from '../core/requests/review-request';
import { CustomSnackbarService } from '../core/services/custom-snackbar.service';
import { ProductService } from '../core/services/product.service';
import { ReviewService } from '../core/services/review.service';
import { ShoppingCartService } from '../core/services/shopping-cart.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  id: string = "";
  product!: Product;
  reviews: Review[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private userService: UserService,
    private shoppingCartService: ShoppingCartService,
    private reviewService: ReviewService,
    private customSnackbarService: CustomSnackbarService,
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.getAll('productId')[0]
    })

    // Get product data
    this.productService.get(this.id)
    .subscribe( product => this.product = product)

    // Get all reviews
    this.reviewService.getByProductId(this.id)
    .subscribe( reviewsFound => {
      let allReviews: Review[] = []
      reviewsFound.forEach( review => { 
      allReviews.push(review)
      })
      
      this.reviews = allReviews;
    } 
    )
  }

  addToShoppingCart() {
    const actorId: String = this.userService.getId();
    const productId: String = this.product?.productId!;

    if (!this.isUserLoggedIn()) {
      this.router.navigateByUrl("/login");
      return
    }

    const shoppingCartRequest: ShoppingCartRequest = {
      actorId: actorId,
      productId: productId,
      amount: 0,
      addedAt: Date.now()
    };

    this.shoppingCartService.insert(shoppingCartRequest)
    .subscribe({
      next: (response: HttpResponse<any>) => {
        let body = JSON.parse(JSON.stringify(response));
        this.customSnackbarService.open(
          `You have added "${this.product.productName}" to your shopping cart!`,
        )
      },
      error: (e) => {}
    })
  }

  addToFavorites() {
    if (!this.isUserLoggedIn()) {
      this.router.navigateByUrl("/login");
    }
  }

  onReviewAttempt(reviewRequest: ReviewRequest) {
    if (!this.isUserLoggedIn()) {
      this.customSnackbarService.open(
        `Please login before reviewing!`,
      )
      return;
    }
    reviewRequest.actorId = this.userService.getId().toString();
    reviewRequest.productId = this.id;

    this.reviewService.insert(reviewRequest).subscribe({
      next: (response: HttpResponse<any>) => {
        this.customSnackbarService.open(
          `Review added!`,
        )
      },
      error: (e) => {}
    });
  }

  private isUserLoggedIn(): Boolean {
    const actorId: String = this.userService.getId();
    if(actorId === undefined) {
      return false;
    }
    return true;
  }
}


