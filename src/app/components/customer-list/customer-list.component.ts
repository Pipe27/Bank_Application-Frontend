import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  customers: Customer[];
  subscriptions: Subscription;

  constructor( public customerService: CustomerService ) { }

  ngOnInit(): void {
    this.findAllCustomers();
  }

  findAllCustomers(): void {
    this.customerService.findAll().subscribe(
      data => {
        this.customers = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
