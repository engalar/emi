import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.sass']
})
export class FrontComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  bk () {
    this.router.navigateByUrl('emi/cutting/bk');
  }

  function () {
    this.router.navigateByUrl('emi/cutting/hem');
  }

}
