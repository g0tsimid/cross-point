import {
  Content,
  WysiwygMarkupContent,
  CodeContent,
  CodeDiffContent,
  CodeFileListContent,
  ContentType
} from './content';

/**
 * A factory that creates a piece of content with the given type.
 */
export default class ContentFactory {
  static createContent(contentType: ContentType): Content {
    switch (contentType) {
      case ContentType.WysiwygMarkup:
        return new WysiwygMarkupContent();
      case ContentType.Code:
        return new CodeContent();
      case ContentType.CodeDiff:
        return new CodeDiffContent();
      case ContentType.CodeFileList:
        return new CodeFileListContent();
    }
  }
}
