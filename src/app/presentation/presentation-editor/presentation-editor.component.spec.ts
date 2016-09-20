import { TestBed } from '@angular/core/testing';
import { PresentationEditorComponent } from './presentation-editor.component';
describe('Editor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [PresentationEditorComponent]});
  });
  it('displays an empty presentation when no presentation is provided', () => {
    let fixture = TestBed.createComponent(PresentationEditorComponent);
    expect(fixture.componentInstance.presentation.sections.length).toBe(0, "New presentation should have 0 sections.");
  });
});
