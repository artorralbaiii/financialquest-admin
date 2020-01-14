import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { IConfig } from 'src/app/models/config';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.css']
})
export class ConfigFormComponent implements OnInit {

  formData = new Config();

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: IConfig) {
    this.dataservice.save('config', form)
      .subscribe(resp => {
        this.router.navigate(['/config']);
      });
  }

}

class Config implements IConfig {
  key: String = '';
  value: any = '';
}
