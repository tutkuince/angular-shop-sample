import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../product';

@Component({
  selector: 'app-product-add-reactive-form',
  templateUrl: './product-add-reactive-form.component.html',
  styleUrls: ['./product-add-reactive-form.component.css']
})
export class ProductAddReactiveFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  productAddForm: FormGroup;
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
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);
    }
  }
}
