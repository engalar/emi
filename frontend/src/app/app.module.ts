import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ApolloClient, createNetworkInterface} from 'apollo-client';
import {ApolloModule} from 'apollo-angular';

// by default, this client will send queries to `/graphql` (relative to the URL of your app)
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:9977/graphql'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule.forRoot(provideClient),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
