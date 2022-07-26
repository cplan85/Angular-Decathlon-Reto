import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient ) { }

  private apiUrl: string = '';
  private _products: any[] = [];

  get products(): any[] {
    return this._products;
  }

  getProduts(id: number): Observable<any[]> {
    const url = `${this.apiUrl}${ id }`;
    return this.http.get<any>(url);
  } 

  getUser(user_id: number): Observable<any[]> {
    const url = `${this.apiUrl}${ user_id }`;
    return this.http.get<any>(url);
  }
  
}
