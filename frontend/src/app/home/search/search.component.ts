import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  hisItems = ['his1', 'his2', 'his3', 'his4', 'his5', 'his6', 'his7', 'his8', 'his9'];

  constructor() {
  }

  ngOnInit() {
  }

}
