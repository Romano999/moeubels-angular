import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../core/models/product';
import { ShoppingCartRequest } from '../core/models/shopping-cart-request';
import { ProductService } from '../core/services/product.service';
import { ShoppingCartService } from '../core/services/shopping-cart.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {
  id: string = "";
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private userService: UserService,
    private shoppingCartService: ShoppingCartService
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.getAll('productId')[0]
    })
    this.productService.get(this.id)
    .subscribe( product => this.product = product)
  }

  checkIfUserIsLoggedIn(): Boolean {
    const actorId: String = this.userService.getId();
    if(actorId === undefined) {
      return false;
    }
    return true;
  }

  addToShoppingCart() {
    const actorId: String = this.userService.getId();
    const productId: String = this.product?.productId!;

    if (!this.checkIfUserIsLoggedIn()) {
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
      },
      error: (e) => console.log(e)
    })
  }

  addToFavorites() {
    if (!this.checkIfUserIsLoggedIn()) {
      this.router.navigateByUrl("/login");
    }
  }
}


