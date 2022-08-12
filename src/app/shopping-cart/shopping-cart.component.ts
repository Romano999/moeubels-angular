import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pageable } from '../core/models/pageable';
import { Product } from '../core/models/product';
import { ShoppingCart } from '../core/models/shopping-cart';
import { CustomSnackbarService } from '../core/services/custom-snackbar.service';
import { ShoppingCartService } from '../core/services/shopping-cart.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: ShoppingCart[] = [];
  products: Product[] = []
  pageable: Pageable = {page: 0, amount:5}
  amountOfResults: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private userService: UserService,
    private customSnackbarService: CustomSnackbarService,
  ) { }

  ngOnInit(): void {
    const userId: String = this.userService.getId()
    this.shoppingCartService.getAll(
      userId)
    .subscribe({
      next: (response: HttpResponse<any>) => {
        let body = JSON.parse(JSON.stringify(response));
        let items: [] = body;
        items.forEach(e => this.shoppingCart.push(e))

        this.shoppingCart.forEach(item => {
          this.products.push(item.product)
        })
      },
      error: (e) => console.log(e)
    })
  }

  payItems() {
    let user = this.userService.getId().toString();
    this.shoppingCartService.payment(user)
    .subscribe({
      next: (response: HttpResponse<any>) => {
        this.products = [];
        this.customSnackbarService.open(`Payment successful!`);
      },
      error: (e) => console.log(e)
    });
  }

}
