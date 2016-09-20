import { Component, OnInit, Input } from '@angular/core';
import { PresentationSection } from '../shared';

@Component({
  selector: 'my-section-editor',
  templateUrl: 'section-editor.component.html'
})
export class SectionEditorComponent implements OnInit {
  constructor() { }

  @Input() section : PresentationSection
  isEditing: boolean = false;

  ngOnInit() { }

}
