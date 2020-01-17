import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICustomer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: ICustomer[] = [];

  constructor(private _route: ActivatedRoute) {
    this.customers = this._route.snapshot.data.customers;
  }

  ngOnInit() {
  }

}
