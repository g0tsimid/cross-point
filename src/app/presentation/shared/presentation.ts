import { PresentationSection } from './presentation-section';
import { ContentType } from './content';

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
  addSection(contentType: ContentType) : PresentationSection {
    const section = new PresentationSection(contentType);
    this.sections.push(section);
    section.sortIndex = this.sections.length;
    return section;
  }
}
