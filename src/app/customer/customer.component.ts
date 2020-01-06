import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  router: string;

  constructor(private _router: Router) {
    this.router = _router.url;
  }

  ngOnInit() {
  }

}
