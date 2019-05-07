import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-product-add-classic-form',
  templateUrl: './product-add-classic-form.component.html',
  styleUrls: ['./product-add-classic-form.component.css']
})
export class ProductAddClassicFormComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  model: Product = new Product();

  ngOnInit() {
  }

}
