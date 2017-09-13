import {Component, OnInit} from '@angular/core';
import {HemComponent} from '../dialog/dialog.component';
import {MdDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.sass']
})
export class RootComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
