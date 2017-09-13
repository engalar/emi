import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class HemComponent implements OnInit {
  constructor(private router: Router) {
  }
  front () {
    this.router.navigateByUrl('emi/cutting');
  }

  ngOnInit() {
  }
}
