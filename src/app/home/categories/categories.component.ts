import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Array<Category> = [];

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

    const categoryThree: Category = {
      categoryName: "Couches",
      categoryDescription: "Couches for all.",
      imagePath: "../../../assets/photos/categories/couches.jpeg"
    };

    this.categories.push(categoryOne, categoryTwo, categoryThree);
  }

}
