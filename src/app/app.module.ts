import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home';
import { PresentationEditorComponent, SectionEditorComponent } from './presentation';
import { MarkdownPipe, NavComponent } from './shared'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MarkdownPipe,
    NavComponent,
    PresentationEditorComponent,
    SectionEditorComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
