import { PresentationSection } from './presentation-section';

/**
 * A presentation that has any visual aids such as images, code samples,
 * and examples connected to an explicit part of the article that the reader
 * is currently reading.
 */
export class Presentation {
  constructor() {
    this.sections = [];
  }
  presentationID : number
  name: string = ""
  tagline: string = ""
  sections: PresentationSection[]

  /**
   * Add a new section to the presentation.
   */
  addSection({i, section} : { i?: number, section?: PresentationSection}) {
    i = i != null ? i : this.sections.length;
    section = section != null ? section : new PresentationSection();
    section.sortIndex = this.sections.reduce((max, section) => Math.max(max, section.sortIndex), 0) + 1;
    this.sections.splice(i, 0, section);
    return section;
  }
}
