import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IReward } from 'src/app/models/reward';
import { IProfile } from 'src/app/models/profile';

@Component({
  selector: 'app-reward-form',
  templateUrl: './reward-form.component.html',
  styleUrls: ['./reward-form.component.css']
})
export class RewardFormComponent implements OnInit {

  formData = new Reward();
  profiles: IProfile[] = [];

  constructor(private dataservice: DataService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.profiles = this._route.snapshot.data.profiles;
  }

  onSubmit(form: IReward) {
    this.dataservice.save('reward', form)
      .subscribe(resp => {
        this.router.navigate(['/reward']);
      });
  }

}

class Reward implements IReward {
  name: String; description: String;
  type: String;
  level: Number;
  profile: String;
}
