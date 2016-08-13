import { Presentation } from './presentation';
import { PresentationSection } from './presentation-section';

describe("Presentation", () => {
  it("has no sections when created", () => {
    let presentation : Presentation = new Presentation();
    expect(presentation.sections.length).toBe(0);
  })
  it("adds the first section to the first sort index", () => {
    let presentation : Presentation = new Presentation();
    let section : PresentationSection = presentation.addSection();
    expect(section.sortIndex).toBe(1)
  })
});
