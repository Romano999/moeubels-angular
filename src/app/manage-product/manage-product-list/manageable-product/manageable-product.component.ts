import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/models/product';
import { ProductUpdateRequest } from 'src/app/core/requests/product-update-request';

@Component({
  selector: 'app-manageable-product',
  templateUrl: './manageable-product.component.html',
  styleUrls: ['./manageable-product.component.scss']
})
export class ManageableProductComponent implements OnInit {
  @Input() product!: Product;
  productPrice!: string;
  isEditing: boolean = false;
  editForm!: FormGroup;
  @Output() editAttempt = new EventEmitter<ProductUpdateRequest>();
  
  constructor() { }

  ngOnInit(): void {
    this.productPrice = this.roundToTwoDecimals(this.product.price);
  
    this.editForm = new FormGroup({
      "imageUrl": new FormControl(this.product.imagePath, [
        Validators.required
      ]),
      "name": new FormControl(this.product.productName, [
        Validators.required
      ]),
      "description": new FormControl(this.product.productDescription, [
        Validators.required
      ]),
      "price": new FormControl(this.product.price, [
        Validators.required,
      ]),
      "amountAvailable": new FormControl(this.product.amountAvailable, [
        Validators.required,
      ]),
      "category": new FormControl(this.product.category.categoryId, [
        Validators.required
      ])
    });
  }

  onEditAttempt(): void {
    if (!this.isEditing) {
      this.isEditing = !this.isEditing;
      return
    }

    let updatedProduct: ProductUpdateRequest = {
      productId: this.product.productId,
      productName: this.editForm.value['name'],
      productDescription: this.editForm.value['description'],
      price: parseFloat(this.roundToTwoDecimals(this.editForm.value['price'])),
      categoryId: this.editForm.value['category'],
      amountAvailable: this.editForm.value['amountAvailable'],
      imagePath: this.editForm.value['imageUrl'],
    }

    this.editAttempt.emit(updatedProduct);
    this.isEditing = !this.isEditing;
  }

  private roundToTwoDecimals(number: number) {
    return Number(Math.round(parseFloat(number + 'e' + 2)) + 'e-' + 2).toFixed(2);
  }
}
