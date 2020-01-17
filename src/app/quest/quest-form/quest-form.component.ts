import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service'
import { IQuest } from 'src/app/models/quest';
import { IProfile } from 'src/app/models/profile';
import { IReward } from 'src/app/models/reward';

@Component({
  selector: 'app-quest-form',
  templateUrl: './quest-form.component.html',
  styleUrls: ['./quest-form.component.css']
})
export class QuestFormComponent implements OnInit {

  formData = new Quest();
  profiles: IProfile[] = [];
  rewards: IReward[] = [];

  constructor(private dataservice: DataService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.profiles = this._route.snapshot.data.profiles;
    this.rewards = this._route.snapshot.data.rewards;
  }

  onSubmit(form: IQuest) {
    this.dataservice.save('quest', form)
      .subscribe(resp => {
        this.router.navigate(['/quest']);
      });
  }

}

class Quest implements IQuest {
  name: String = '';
  description: String = '';
  pointsMultiplier: Number = 0;
  repeatCount: Number = 0;
  requiredLevel: Number = 0;
  profile: any = null;
  reward: any = null;
  goal: Number = 0;
}
