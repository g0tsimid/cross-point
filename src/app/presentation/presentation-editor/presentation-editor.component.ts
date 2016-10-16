import { Component, OnInit } from '@angular/core';
import { Presentation, PresentationSection, ContentType } from '../shared'

@Component({
  selector: 'my-editor',
  templateUrl: 'presentation-editor.component.html',
  styleUrls: ["./presentation-editor.component.css"]
})
export class PresentationEditorComponent implements OnInit {
  constructor() { 
    this.presentation = new Presentation();
  }

  ContentType = ContentType;
  presentation: Presentation
  selectedSection: PresentationSection

  onAddSection(contentType: ContentType) {
    this.selectedSection = this.presentation.addSection(contentType);
  }

  ngOnInit() { }

}
