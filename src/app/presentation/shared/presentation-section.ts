import {
  Content,
  ContentType
} from './content';

import ContentFactory from './content-factory';

/**
 * A section in a presentation that contains article content, timing information,
 * and an optional visual aid.
 */
export class PresentationSection {
  autoplayLength: number
  sortIndex: number
  articleContent: Content
  sideContent: Content[]

  constructor(articleContentType: ContentType) {
    this.setArticleContent(articleContentType);
  }

  setArticleContent(contentType: ContentType) {
    this.articleContent = ContentFactory.createContent(contentType);
  }

  addSideContent(contentType: ContentType) {
    this.sideContent.push(ContentFactory.createContent(contentType));
  }
}
