import { Component, OnInit } from '@angular/core';
import { Presentation, PresentationSection } from '../shared'

@Component({
  selector: 'my-editor',
  templateUrl: 'presentation-editor.component.html'
})
export class PresentationEditorComponent implements OnInit {
  constructor() { 
    this.presentation = new Presentation();
  }

  presentation: Presentation
  selectedSection: PresentationSection

  onAddSection() {
    this.selectedSection = this.presentation.addSection({});
  }

  ngOnInit() { }

}
