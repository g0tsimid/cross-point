import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  routing,
  appRoutingProviders
} from './app.routing';
import { HomeComponent } from './home';
import { NavComponent } from './shared/nav'
import { MarkdownPipe } from './shared/markdown'
import {
  PresentationEditorComponent,
  SectionEditorComponent
} from './presentation';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PresentationEditorComponent,
    SectionEditorComponent,
    MarkdownPipe
  ],
  providers: [
      
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }