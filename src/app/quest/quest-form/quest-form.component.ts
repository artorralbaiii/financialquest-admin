import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service'

@Component({
  selector: 'app-quest-form',
  templateUrl: './quest-form.component.html',
  styleUrls: ['./quest-form.component.css']
})
export class QuestFormComponent implements OnInit {

  formData = {};

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.dataservice.save('quest', form)
      .subscribe(resp => {
        this.router.navigate(['/quest']);
      });
  }

}
