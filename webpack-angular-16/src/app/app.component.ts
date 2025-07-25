import { Component } from '@angular/core';
import {TuiRoot} from "@taiga-ui/core";

@Component({
  standalone: true,
  selector: 'app-root',
  template: '<tui-root>{{title}}</tui-root>',
  imports: [
    TuiRoot
  ]
})
export class AppComponent {
  title = 'webpack-angular-16';
}
