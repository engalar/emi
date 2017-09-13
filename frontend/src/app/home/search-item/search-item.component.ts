import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.sass']
})
export class SearchItemComponent implements OnInit {
  @Input() item

  constructor() {
  }

  ngOnInit() {
  }

}
