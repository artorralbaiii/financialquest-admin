import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles: Profile[] = [];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.profiles = this._route.snapshot.data.profiles;
  }

}
