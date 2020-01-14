import { Component, OnInit } from '@angular/core';
import { ILevel } from '../models/level';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  levels: ILevel[] = [];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.levels = this._route.snapshot.data.levels;
  }

}
