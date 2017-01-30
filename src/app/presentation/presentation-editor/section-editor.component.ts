import { Component, OnInit, Input } from '@angular/core';
import { PresentationSection, ContentType } from '../shared';

@Component({
  selector: 'my-section-editor',
  templateUrl: 'section-editor.component.html'
})
export class SectionEditorComponent implements OnInit {
  constructor() { }

  @Input() section : PresentationSection
  ContentType = ContentType
  isEditing: boolean = false
  text: string

  ngOnInit() { }

}
