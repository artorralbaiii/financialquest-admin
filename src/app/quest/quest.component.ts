import { Component, OnInit } from '@angular/core';
import { IQuest } from '../models/quest';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  editMode: boolean;
  quests: IQuest[] = [];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.editMode = false;
    this.quests = this._route.snapshot.data.quest;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  save() {

  }


}