import { Component, OnInit } from '@angular/core';
import { Level } from '../models/level';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  levels: Level[] = [];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.levels = this._route.snapshot.data.levels;
  }

}
