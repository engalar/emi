import {Component} from '@angular/core';

import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

import currentUserQuery from './currentUser.graphql';


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
