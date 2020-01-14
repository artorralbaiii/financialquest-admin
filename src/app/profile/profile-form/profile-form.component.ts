import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProfile } from 'src/app/models/profile';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  formData = new Profile();
  profiles: IProfile[] = [];

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: IProfile) {
    this.dataservice.save('profile', form)
      .subscribe(resp => {
        this.router.navigate(['/profile']);
      });
  }

}

class Profile implements IProfile {
  profileId: Number;  name: String;
  description: String;
}
