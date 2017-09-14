import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  items = [
    {title: 'Pre- Production Information'},
    {title: 'Cutting Information'},
    {title: 'Sewing Information'},
    {title: 'Washing  Information'},
    {title: 'Finishing Information'},
  ];

  location: Subject<any>;
  containerStyle = {
    // width: this.items.length * 100 + 'px',
    display: 'flex',
    'flex-wrap': 'nowrap'
  };

  constructor() {
  }

  ngOnInit() {
    this.location = new Subject<any>();
    this.location.next({c: 3, l: 4});
    this.location.next({c: 4, l: 4});
    this.location.next({c: 1, l: 4});
  }

}
