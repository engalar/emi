import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.sass']
})
export class WorkSpaceComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() {
  }

  ngOnInit() {
  }

}
