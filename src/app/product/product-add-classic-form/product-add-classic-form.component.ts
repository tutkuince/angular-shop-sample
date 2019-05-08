import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../category/category';
import {NgForm} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {AlertifyService} from '../../services/alertify.service';

@Component({
  selector: 'app-product-add-classic-form',
  templateUrl: './product-add-classic-form.component.html',
  styleUrls: ['./product-add-classic-form.component.css']
})
export class ProductAddClassicFormComponent implements OnInit {

  constructor(private categoryService: CategoryService, private productService: ProductService, private alertifyService: AlertifyService) {
  }

  model: Product = new Product();
  categories: Category[];

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe(data => this.categories = data);
  }

  add(form: NgForm) {
    this.productService.addProduct(this.model).subscribe(data => {
      this.alertifyService.success(data.name + ' successfully added!');
    });
  }

}
