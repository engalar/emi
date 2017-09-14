import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.sass']
})
export class SearchViewComponent implements OnInit {
  hisItems = ['his1', 'his2', 'his3', 'his4', 'his5', 'his6', 'his7', 'his8', 'his9'];

  constructor(private  router: Router) {
  }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('emi/home');
  }
}
