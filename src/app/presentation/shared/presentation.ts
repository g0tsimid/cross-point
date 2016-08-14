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
  addSection() {
    const section = new PresentationSection();
    section.sortIndex = this.sections.reduce((max, section) => Math.max(max, section.sortIndex), 0) + 1;
    this.sections.push(section)
    return section;
  }
}
