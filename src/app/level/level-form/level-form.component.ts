import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level-form',
  templateUrl: './level-form.component.html',
  styleUrls: ['./level-form.component.css']
})
export class LevelFormComponent implements OnInit {

formData = {};

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.dataservice.save('level', form)
      .subscribe(resp => {
        this.router.navigate(['/level']);
      });
  }

}
