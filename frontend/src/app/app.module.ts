import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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

import {AppComponent} from './app.component';
import {CuttingModule} from './cutting/cutting.module';
import {RouterModule} from '@angular/router';
import {MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ColModule} from './col/col.module';
import {SearchModule} from './search/search.module';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    ApolloModule.forRoot(provideClient),
    CuttingModule,
    FormsModule,
    ReactiveFormsModule,
    ColModule,
    SearchModule,
    HomeModule,

    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
