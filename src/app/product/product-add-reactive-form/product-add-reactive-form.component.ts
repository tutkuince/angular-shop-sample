import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../product';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../category/category';
import {ProductService} from '../../services/product.service';
import {AlertifyService} from '../../services/alertify.service';

@Component({
  selector: 'app-product-add-reactive-form',
  templateUrl: './product-add-reactive-form.component.html',
  styleUrls: ['./product-add-reactive-form.component.css']
})
export class ProductAddReactiveFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService) {
  }

  productAddForm: FormGroup;
  categories: Category[];
  product: Product = new Product();

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.createProductAddForm();
    this.categoryService.getCategoryList().subscribe(data => this.categories = data);
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);
      this.productService.addProduct(this.product).subscribe(data => {
        this.alertifyService.success(data.name + ' successfully added!');
      });
    }
  }
}
