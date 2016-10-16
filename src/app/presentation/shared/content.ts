/**
 * A generic piece of content that has a specific concrete type.
 */
export interface Content {
  contentType: ContentType
}

/**
 * A piece of rich text content that is represented by markup.
 */
export class WysiwygMarkupContent implements Content {
  readonly contentType: ContentType = ContentType.WysiwygMarkup
  markup: string
}

/**
 * A piece of code content that represents code in a specific programming
 * language, and may contain specific lines highlighted for emphasis.
 */
export class CodeContent implements Content {
  readonly contentType: ContentType = ContentType.Code
  fileName: string
  language: string
  code: string
  highlightedLines : number[]
}

/**
 * Content that represents two plain-text code files being compared.
 */
export class CodeDiffContent implements Content {
  readonly contentType: ContentType = ContentType.CodeDiff
  diffName: string
  leftCodeContent: CodeContent
  rightCodeContent: CodeContent
  diff: string
}

/**
 * Content that represents a group of code files.
 */
export class CodeFileListContent implements Content {
  readonly contentType: ContentType = ContentType.CodeFileList
  listName: string
  codeFiles: CodeContent[]
}

/**
 * The enumerated category of all content types.
 */
export enum ContentType {
  WysiwygMarkup,
  Code,
  CodeDiff,
  CodeFileList
}