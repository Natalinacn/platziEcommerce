import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private URL_API: string = 'https://api.escuelajs.co/api/v1/products';

  totalProducts: any = Number(localStorage.getItem('totalProducts')) || 0;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> | undefined {
    return this.http.get(this.URL_API);
  }

  public findById(id: number): Observable<any> | undefined {
    return this.http.get(`${this.URL_API}/${id}`);
  }

  public countCartProducts(cantidad: number) {
    this.totalProducts = cantidad;
    localStorage.setItem('totalProducts', JSON.stringify(cantidad));
  }

  public setStorage(key: string, cart: Cart) {
    this.countCartProducts(cart.totalProducts);
    localStorage.setItem(key, JSON.stringify(cart));
  }

  calcularTotal(cart: any) {
    return cart.map((p: any) => p.price).reduce((a: any, b: any) => a + b);
  }
}
