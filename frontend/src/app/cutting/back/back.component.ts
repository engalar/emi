import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.sass']
})
export class BackComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  front () {
    this.router.navigateByUrl('emi/cutting/cutting');
  }
  home () {
    this.router.navigateByUrl('emi/home');
  }
}
