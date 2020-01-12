import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reward } from '../models/reward';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  rewards: Reward[] = [];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.rewards = this._route.snapshot.data.rewards;
  }


}
