import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductCreateRequest } from 'src/app/core/requests/product-create-request';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  isCreating: boolean = false;
  createForm!: FormGroup;
  @Output() createAttempt = new EventEmitter<ProductCreateRequest>();

  constructor() { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      "imageUrl": new FormControl(null, [
        Validators.required
      ]),
      "name": new FormControl(null, [
        Validators.required
      ]),
      "description": new FormControl(null, [
        Validators.required
      ]),
      "price": new FormControl(null, [
        Validators.required,
      ]),
      "amountAvailable": new FormControl(null, [
        Validators.required,
      ]),
      "categoryName": new FormControl(null, [
        Validators.required
      ])
    });
  }

  openForm(): void {
    this.isCreating = !this.isCreating;
  }

  onCreateAttempt(): void {
    let updatedProduct: ProductCreateRequest = {
      productName: this.createForm.value['name'],
      productDescription: this.createForm.value['description'],
      price: parseFloat(this.roundToTwoDecimals(this.createForm.value['price'])),
      categoryName: this.createForm.value['categoryName'],
      amountAvailable: this.createForm.value['amountAvailable'],
      imagePath: this.createForm.value['imageUrl'],
    }

    this.createAttempt.emit(updatedProduct);
    this.openForm();
  }

  private roundToTwoDecimals(number: number) {
    return Number(Math.round(parseFloat(number + 'e' + 2)) + 'e-' + 2).toFixed(2);
  }
}
