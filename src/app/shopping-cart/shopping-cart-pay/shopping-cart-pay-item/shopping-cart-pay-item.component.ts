import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-shopping-cart-pay-item',
  templateUrl: './shopping-cart-pay-item.component.html',
  styleUrls: ['./shopping-cart-pay-item.component.scss']
})
export class ShoppingCartPayItemComponent implements OnInit{
  @Input() product!: Product;
  productPrice!: string;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.productPrice = Number(Math.round(parseFloat(this.product.price + 'e' + 2)) + 'e-' + 2).toFixed(2);
  }

  removeItem() {
    this.shoppingCartService.deleteWithBody(this.userService.getId().toString(), this.product.productId)
    .subscribe({
      next: (response: HttpResponse<any>) => {
      },
      error: (e) => {}
    });
  }
}
