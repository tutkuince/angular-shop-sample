import {Component, OnInit} from '@angular/core';
import {Category} from './category';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) {
  }

  title = 'Categories';

  categories: Category[];

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe(data => this.categories = data);
  }

}
