import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {AlertifyService} from '../services/alertify.service';
import {ProductService} from '../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private productService: ProductService, private activatedRoute: ActivatedRoute) { // alertifyService injection

  }

  title = 'Product List';
  filterText = '';
  products: Product[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProductList(params["categoryId"]).subscribe(data => {
        this.products = data;
      });
    });
  }

  addToCart(product: Product) {
    this.alertifyService.success(product.name + ' added!');
  }

}
