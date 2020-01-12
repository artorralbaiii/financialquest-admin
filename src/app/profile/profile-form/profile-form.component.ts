import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  formData = {};

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.dataservice.save('profile', form)
      .subscribe(resp => {
        this.router.navigate(['/profile']);
      });
  }

}
