import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.sass']
})
export class MenuItemComponent implements OnInit {
  height = '150px';
  @Input() location: Observable<any>;
  @Input() item: any;

  constructor() {
  }

  ngOnInit() {
    this.location.subscribe(data => {
      console.log(data);
    });
  }

}
