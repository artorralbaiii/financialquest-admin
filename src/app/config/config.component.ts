import { Component, OnInit } from '@angular/core';
import { IConfig } from '../models/config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  configs: IConfig[] = [];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.configs = this._route.snapshot.data.configs;
  }

}
