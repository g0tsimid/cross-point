import { Component, OnInit } from '@angular/core';
import { SectionEditorComponent } from './section-editor.component';
import { Presentation, PresentationSection } from '../shared'

@Component({
  selector: 'cp-editor',
  templateUrl: 'presentation-editor.component.html',
  directives: [SectionEditorComponent]
})
export class PresentationEditorComponent implements OnInit {
  constructor() { 
    this.presentation = new Presentation();
  }

  presentation: Presentation
  selectedSection: PresentationSection

  onAddSection() {
    this.selectedSection = this.presentation.addSection();
  }

  ngOnInit() { }

}
