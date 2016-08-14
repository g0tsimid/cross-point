import { Pipe, PipeTransform } from '@angular/core'
import * as marked from "marked";

/**
 * A pipe that transforms markdown-formatted templates into markdown output.
 */
@Pipe({ name: 'markdown' })
export class MarkdownPipe implements PipeTransform {
  transform(markdown: string): string {
    return marked(markdown || "", {
      highlight: function (code: string, lang: string, callback?: Function): string {
        return hljs.highlightAuto(code).value;
      }
    });
  }
}
