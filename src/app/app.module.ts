import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  routing,
  appRoutingProviders
} from './app.routing';
import { HomeComponent } from './home';
import { PresentationModule } from './presentation';
import { NavComponent } from './shared/nav'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    PresentationModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent
  ],
  providers: [
      
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }