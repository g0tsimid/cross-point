import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MarkdownPipe } from '../shared/markdown';
import { presentationRouting } from './presentation.routing';

import { DiffEditorComponent } from './diff-editor'
import {
  CodeEditorComponent,
  PresentationEditorComponent,
  SectionEditorComponent
} from './presentation-editor';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    presentationRouting
  ],
  declarations: [
    CodeEditorComponent,
    DiffEditorComponent,
    PresentationEditorComponent,
    SectionEditorComponent,
    MarkdownPipe
  ]
})
export class PresentationModule {}