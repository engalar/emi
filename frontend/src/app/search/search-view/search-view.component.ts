import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.sass']
})
export class SearchViewComponent implements OnInit {
  hisItems = ['his1', 'his2', 'his3', 'his4', 'his5', 'his6', 'his7', 'his8', 'his9'];
  constructor() { }

  ngOnInit() {
  }

}
