import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-controls',
  templateUrl: './table-controls.component.html',
  styleUrls: ['./table-controls.component.css']
})
export class TableControlsComponent implements OnInit {

  @Input() appNewRoute: string;
  @Input() appCancelRoute: string;

  editMode: boolean;

  constructor() { }

  ngOnInit() {
    this.editMode = false;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

}
