import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  items = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
