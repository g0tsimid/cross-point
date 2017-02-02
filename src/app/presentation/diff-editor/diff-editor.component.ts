import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core'

import 'brace/theme/twilight';
import * as AceDiff from 'brace-diff'

class AceDiffType extends AceDiff {}

@Component({
  selector: "my-diff-editor",
  templateUrl: "./diff-editor.component.html",
  styleUrls: ["./diff-editor.component.css"]
})
export class DiffEditorComponent implements OnDestroy, OnInit {
  @Input() mode : string;
  @Input() leftCode : string = ""
  @Input() rightCode : string = ""
  private aceDiff : AceDiffType // For some reason, referring to AceDiff directly doesn't work.

  constructor(private elementRef : ElementRef) { }

  ngOnInit() {
    this.aceDiff = new AceDiff({
      mode: `ace/mode/${this.mode}`,
      theme: `ace/theme/twilight`,
      diffGranularity: "specific",
      left: {
        id: this.elementRef.nativeElement
          .querySelector("#acediff-left-editor")
      },
      right: {
        id: this.elementRef.nativeElement
          .querySelector("#acediff-right-editor")
      }
    })
  }

  ngOnDestroy() {
    this.aceDiff.destroy()
  }
}
