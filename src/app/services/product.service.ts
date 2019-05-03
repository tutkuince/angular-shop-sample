import {Injectable} from '@angular/core';
import {Product} from '../product/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn : 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  path = 'http://localhost:3000/products';

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path);
  }
}
