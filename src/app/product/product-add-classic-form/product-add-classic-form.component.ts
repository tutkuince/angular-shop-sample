import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../category/category';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-add-classic-form',
  templateUrl: './product-add-classic-form.component.html',
  styleUrls: ['./product-add-classic-form.component.css']
})
export class ProductAddClassicFormComponent implements OnInit {

  constructor(private categoryService: CategoryService) {
  }

  model: Product = new Product();
  categories: Category[];

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe(data => this.categories = data);
  }

  add(form: NgForm) {
    alert(form.value.name);
  }

}
