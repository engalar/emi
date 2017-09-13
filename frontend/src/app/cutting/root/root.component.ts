import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.sass']
})
export class RootComponent implements OnInit {

  name = 'Angular';
  modal = document.getElementById('myModal');
  btn = document.getElementById('myBtn');
  span = document.getElementsByClassName('close')[0];

  constructor() {
  }

  ngOnInit() {
  }

  function() {
    this.modal = document.getElementById('myModal');
    this.modal.style.display = 'block';
  }

  close() {
    this.modal = document.getElementById('myModal');
    this.modal.style.display = 'none';
  }
}
