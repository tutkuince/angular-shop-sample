import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Category} from '../category/category';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  path = 'http://localhost:3000/categories';

  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Something went wrong on CategoryService ' + err.error.message;
    } else {
      errorMessage = 'A systematic error has occurred on CategoryService';
    }
    return throwError(errorMessage);
  }
}
