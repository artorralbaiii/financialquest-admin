import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.css']
})
export class ConfigFormComponent implements OnInit {

  formData = {};

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.dataservice.save('config', form)
      .subscribe(resp => {
        this.router.navigate(['/config']);
      });
  }

}
