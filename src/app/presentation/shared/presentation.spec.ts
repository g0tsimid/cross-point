import { Presentation } from './presentation';
import { PresentationSection } from './presentation-section';

describe("Presentation", () => {
  it("has no sections when created", () => {
    let presentation : Presentation = new Presentation();
    expect(presentation.sections.length).toBe(0);
  })
  describe("addSection", () => {
    it("adds the first section to the first sort index", () => {
      let presentation : Presentation = new Presentation();
      let section : PresentationSection = presentation.addSection({});
      expect(section.sortIndex).toBe(1)
    })

    it("inserts specified sections into the specified position", () => {
      let presentation = new Presentation();
      presentation.sections = [
        new PresentationSection(),
        new PresentationSection(),
        new PresentationSection()
      ];
      let section = new PresentationSection();
      section.text = "foo";
      let resultSection = presentation.addSection({i: 1, section: section});
      expect(resultSection).toBe(section, "The object reference should be the same.");
      expect(presentation.sections.length).toBe(4, "The length of the sections should increase.");
      expect(presentation.sections[1].text).toBe("foo", "The section should be found at the expected index.");
    });
  })
});
