import { Component, OnInit } from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  title = 'Product List';
  filterText = '';
  products: Product[] = [
    {id: 1, name: 'Laptop', price: 5000, categoryId: 1, description: 'MSI GE Series', imageUrl: 'https://bit.ly/2DLf4w9'},
    {id: 1, name: 'Mouse', price: 300, categoryId: 2, description: 'Razer Mamba Elite', imageUrl: 'https://bit.ly/2DLf4w9'},
    {id: 1, name: 'Mouse', price: 300, categoryId: 2, description: 'Razer Mamba Elite', imageUrl: 'https://bit.ly/2DLf4w9'},
    {id: 1, name: 'Mouse', price: 300, categoryId: 2, description: 'Razer Mamba Elite', imageUrl: 'https://bit.ly/2DLf4w9'}
  ];

  ngOnInit() {
  }

  addToCart(product: Product) {
    alert(product.name + ' added!');
  }

}
