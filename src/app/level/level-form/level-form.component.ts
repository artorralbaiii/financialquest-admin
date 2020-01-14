import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { ILevel } from 'src/app/models/level';

@Component({
  selector: 'app-level-form',
  templateUrl: './level-form.component.html',
  styleUrls: ['./level-form.component.css']
})
export class LevelFormComponent implements OnInit {

  formData = new Level();

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: ILevel) {
    this.dataservice.save('level', form)
      .subscribe(resp => {
        this.router.navigate(['/level']);
      });
  }

}

class Level implements ILevel {
  name: String;  levelNum: Number;
  pointsRequired: Number;
}
