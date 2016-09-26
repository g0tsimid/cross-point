import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PresentationEditorComponent } from './presentation-editor.component';
import { SectionEditorComponent } from './section-editor.component';
import { MarkdownPipe } from '../../shared/markdown';

describe('Editor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        PresentationEditorComponent,
        SectionEditorComponent,
        MarkdownPipe
      ]
    });
  });
  it('displays an empty presentation when no presentation is provided', () => {
    let fixture = TestBed.createComponent(PresentationEditorComponent);
    expect(fixture.componentInstance.presentation.sections.length).toBe(0, "New presentation should have 0 sections.");
  });
});
