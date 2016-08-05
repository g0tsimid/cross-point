import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import '../../public/css/styles.css';
import { NavComponent } from './shared';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, NavComponent]
})
export class AppComponent { }