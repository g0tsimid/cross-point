import { ContentType, CodeContent } from './content';
import { Presentation } from './presentation';
import { PresentationSection } from './presentation-section';

describe("Presentation", () => {
  it("has no sections when created", () => {
    let presentation: Presentation = new Presentation();
    expect(presentation.sections.length).toBe(0);
  })
  describe("addSection", () => {
    it("adds the first section to the first sort index", () => {
      let presentation: Presentation = new Presentation();
      let section: PresentationSection = presentation.addSection(ContentType.WysiwygMarkup);
      expect(section.sortIndex).toBe(1, "The new section should be assigned its correct index.")
      expect(presentation.sections.length).toBe(1, "The length of the sections list should increase.");
    })

    it("inserts the new section at the end of the sections list.", () => {
      let presentation = new Presentation();
      presentation.sections = [
        new PresentationSection(ContentType.WysiwygMarkup),
        new PresentationSection(ContentType.WysiwygMarkup),
        new PresentationSection(ContentType.Code)
      ];
      let section = presentation.addSection(ContentType.WysiwygMarkup);
      expect(section.sortIndex).toBe(4, "The new section should be assigned its correct index.");
      expect(presentation.sections.length).toBe(4, "The length of the sections list should increase.");
    });

    it("adds the section with the specified content type", () => {
      let presentation: Presentation = new Presentation();
      let section: PresentationSection = presentation.addSection(ContentType.Code);
      expect(section.articleContent.contentType).toBe(ContentType.Code)
      expect(section.articleContent instanceof CodeContent).toBe(true);
    })
  })
});
