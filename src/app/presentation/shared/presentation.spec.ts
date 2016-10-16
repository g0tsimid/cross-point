import { ContentType, CodeContent } from './content';
import { Presentation } from './presentation';
import { PresentationSection } from './presentation-section';

describe("Presentation", () => {
  it("has no sections when created", () => {
    let presentation : Presentation = new Presentation();
    expect(presentation.sections.length).toBe(0);
  })
  it("adds the first section to the first sort index", () => {
    let presentation : Presentation = new Presentation();
    let section : PresentationSection = presentation.addSection(ContentType.WysiwygMarkup);
    expect(section.sortIndex).toBe(1)
  })
  it("adds a section with the specified content type", () => {
    let presentation : Presentation = new Presentation();
    let section : PresentationSection = presentation.addSection(ContentType.Code);
    expect(section.articleContent.contentType).toBe(ContentType.Code)
    expect(section.articleContent instanceof CodeContent).toBe(true);
  })
});
