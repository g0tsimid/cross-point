import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core'
import * as brace from 'brace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

/**
 * A code editor that can be made read-only. It emits changes to the text in 
 * the editor and to the selected lines.
 */
@Component({
  selector: "my-code-editor",
  templateUrl: "./code-editor.component.html",
  styleUrls: ["./code-editor.component.css"]
})
export class CodeEditorComponent implements OnInit, OnDestroy {
  editor : brace.Editor
  grabbed : boolean = false

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.editor = brace.edit(this.elementRef.nativeElement.querySelector(
      "#editor"));
    this.editor.setTheme("ace/theme/monokai")
    this.editor.getSession().setMode("ace/mode/javascript")
    this.editor.$blockScrolling = Infinity
  }

  ngOnDestroy() {
    this.editor.destroy()
    let grabber : HTMLElement = this.elementRef.nativeElement
      .querySelector("#vertical-resize-grabber")
    grabber.removeEventListener("dragstart")
    grabber.removeEventListener("dragend")
  }
}