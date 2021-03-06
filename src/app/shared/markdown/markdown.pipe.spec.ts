import { TestBed } from '@angular/core/testing';

import { MarkdownPipe } from './markdown.pipe';

describe("MarkdownPipe", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [MarkdownPipe]})
  })
  it("compiles its input into HTML output", () => {
    const markdown = '*Hello world*';
    const pipe = new MarkdownPipe();
    let result = pipe.transform(markdown);
    expect(result).toContain('<em>Hello world</em>');
  });
  it("compiles null input into the empty string",() => {
    const pipe = new MarkdownPipe();
    let result = pipe.transform(null);
    expect(result).toEqual('');
  });
})
