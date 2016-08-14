import {
  inject, addProviders
} from '@angular/core/testing';
import { PresentationEditorComponent } from './presentation-editor.component';
describe('Editor', () => {
  beforeEach(() => {
    addProviders([
      PresentationEditorComponent
    ])
  });
  it('displays an empty presentation when no presentation is provided', inject([PresentationEditorComponent],
    (editor: PresentationEditorComponent) => {
      expect(editor.presentation.name).toBe("");
      expect(editor.presentation.tagline).toBe("");
      expect(editor.presentation.sections.length).toBe(0);
    }));
});
