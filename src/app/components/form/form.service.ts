import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class ProductService {

    baseUrl = ""
    constructor(private http: HttpClient) {

    }

    create(product: String){
        return this.http.post()
    }
}