import {Component} from '@angular/core';

import {Apollo} from 'apollo-angular';


const currentUserQuery =
  require('./currentUser.graphql');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private apollo: Apollo) {
    apollo.query({query: currentUserQuery})
      .subscribe(result => {
        console.log(result);
      });
  }

  title = 'app';
}
