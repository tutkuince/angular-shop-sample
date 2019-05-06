import {Injectable} from '@angular/core';
import {Product} from '../product/product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  path = 'http://localhost:3000/products';

  getProductList(categoryId): Observable<Product[]> {
    let newPath = this.path;

    if (categoryId) {
      newPath += '?categoryId=' + categoryId;
    }

    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),  // logging
      catchError(this.handleError)  // try catch
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Something went wrong on ProductService ' + err.error.message;
    } else {
      errorMessage = 'A systematic error has occurred on ProductService';
    }
    return throwError(errorMessage);
  }
}
