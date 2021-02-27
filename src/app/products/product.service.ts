import { Injectable } from '@angular/core';
import { IProduct } from './product'
import { HttpClient, HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, find, first, map, tap } from 'rxjs/operators'

@Injectable({
    providedIn: 'root' // this is needed to inject the service to classes.
}) 

export class ProductService {

    productUrl: string = 'api/products/products.json';

    constructor(private http: HttpClient) {

    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );

    }

    getProduct(id: number): Observable<IProduct> {
        let result = this.http.get<IProduct[]>(this.productUrl).pipe(
            map((products: IProduct[]) => products.find(p => p.productId == id))
        );

        return result;
    }

    private handleError(err: HttpErrorResponse) {

        let errorMessage = err.error.message
        console.error(err.error.message);
        return throwError(errorMessage)
    }

}