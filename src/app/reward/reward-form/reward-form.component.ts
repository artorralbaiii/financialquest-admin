import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reward-form',
  templateUrl: './reward-form.component.html',
  styleUrls: ['./reward-form.component.css']
})
export class RewardFormComponent implements OnInit {

  formData = {};

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.dataservice.save('reward', form)
      .subscribe(resp => {
        this.router.navigate(['/reward']);
      });
  }

}
