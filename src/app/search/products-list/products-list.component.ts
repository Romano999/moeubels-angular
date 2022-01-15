import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Array<Product> = [];

  constructor() { }

  ngOnInit(): void {
    const categoryOne: Category = {
      categoryName: "Chairs",
      categoryDescription: "Chairs to sit on.",
      imagePath: "../../../assets/photos/categories/chairs.jpeg"
    };

    const categoryTwo: Category = {
      categoryName: "Tables",
      categoryDescription: "Tables to put stufff on.",
      imagePath: "../../../assets/photos/categories/tables.jpeg"
    };

    const productOne: Product = {
      category: categoryOne,
      productName: "Chair",
      productDescription: "Chair with soft bottom.",
      amountAvailable: 10,
      price: 10.00,
      isOnSale: false,
      imagePath: '../../../assets/photos/chair1.jpg'
    };

    const productTwo: Product = {
      category: categoryOne,
      productName: "Table",
      productDescription: "Table for 4 or more.",
      amountAvailable: 20,
      price: 20.00,
      isOnSale: true,
      imagePath: '../../../assets/photos/table2.jpg'
    };

    this.products.push(productOne, productTwo);
  }

}
