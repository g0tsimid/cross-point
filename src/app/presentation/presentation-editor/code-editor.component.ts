import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core'
import * as brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

/**
 * A code editor that can be made read-only and emits the text in the editor
 * an any selected lines.
 */
@Component({
  selector: "my-code-editor",
  templateUrl: "./code-editor.component.html",
  styleUrls: ["./code-editor.component.css"]
})
export class CodeEditorComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    let editor = brace.edit(this.elementRef.nativeElement.querySelector("#editor"));
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    editor.$blockScrolling = Infinity;
  }
}