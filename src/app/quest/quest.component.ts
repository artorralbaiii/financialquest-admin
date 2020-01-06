import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  editMode: boolean;

  constructor() { }

  ngOnInit() {
    this.editMode = false;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }
}