import {
  inject,
  addProviders
} from '@angular/core/testing';

import { MarkdownPipe } from './markdown.pipe';

describe("MarkdownPipe", () => {
  beforeEach(() => {
    addProviders([
      MarkdownPipe
    ])
  })
  it("compiles its input into markdown output", inject([MarkdownPipe], (pipe : MarkdownPipe) => {
    const markdown = '*Hello World*'
    let result = pipe.transform(markdown);
    expect(result).toContain('<em>Hello World</em>')
  }))
  it("compiles null input into the empty string", inject([MarkdownPipe], (pipe: MarkdownPipe) => {
    let result = pipe.transform(null);
    expect(result).toBe("");
  }));
})