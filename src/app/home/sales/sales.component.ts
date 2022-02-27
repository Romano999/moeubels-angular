import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  products: Array<Product> = [];

  constructor() { }

  ngOnInit(): void {
    const categoryOne: Category = {
      categoryName: "Chairs",
      categoryDescription: "Chairs to sit on.",
      imagePath: "../../../assets/photos/categories/chairs.jpeg"
    };

    const productOne: Product = {
      productName: "Chairs",
      productDescription: "Chairs to sit on.",
      imagePath: "../../../assets/photos/categories/chairs.jpeg",
      category: categoryOne,
      amountAvailable: 0,
      price: 0,
      isOnSale: false
    };

    const productTwo: Product = {
      productName: "Tables",
      productDescription: "Tables to put stufff on.",
      imagePath: "../../../assets/photos/categories/tables.jpeg",
      category: categoryOne,
      amountAvailable: 0,
      price: 0,
      isOnSale: false
    };

    const productThree: Product = {
      productName: "Couches",
      productDescription: "Couches for all.",
      imagePath: "../../../assets/photos/categories/couches.jpeg",
      category: categoryOne,
      amountAvailable: 0,
      price: 0,
      isOnSale: false
    };

    const productFour: Product = {
      productName: "Couches",
      productDescription: "Couches for all.",
      imagePath: "../../../assets/photos/categories/couches.jpeg",
      category: categoryOne,
      amountAvailable: 0,
      price: 0,
      isOnSale: false
    };

    const productFive: Product = {
      productName: "Couches",
      productDescription: "Couches for all.",
      imagePath: "../../../assets/photos/categories/couches.jpeg",
      category: categoryOne,
      amountAvailable: 0,
      price: 0,
      isOnSale: false
    };

    this.products.push(productOne, productTwo, productThree, productFour, productFive);
  }

}
