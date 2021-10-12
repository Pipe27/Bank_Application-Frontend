import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerEndpoint = `${environment.apiUrl}/customer/api/v1/customer`;

  constructor(public httpClient: HttpClient) {}

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.customerEndpoint);
  }

  findById(id: number): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.customerEndpoint}/${id}`);
  }

  save(customer: Customer): Observable<Customer>{
    return this.httpClient.post<Customer>(this.customerEndpoint, customer);
  }

  update(customer: Customer): Observable<Customer>{
    return this.httpClient.put<Customer>(this.customerEndpoint, customer);
  }

  delete(id: number): Observable<Customer>{
    return this.httpClient.delete<Customer>(`${this.customerEndpoint}/${id}`);
  }

}
