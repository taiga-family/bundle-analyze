import { Component } from '@angular/core';
import {tuiHintOptionsProvider, TuiRoot} from "@taiga-ui/core";
import {tuiBreadcrumbsOptionsProvider} from "@taiga-ui/kit";

@Component({
  standalone: true,
  selector: 'app',
  template: '<tui-root>{{title}}</tui-root>',
  imports: [
    TuiRoot
  ],
  providers: [
    tuiBreadcrumbsOptionsProvider({}),
    tuiHintOptionsProvider({})
  ]
})
export class App {
  title = 'esbuild-angular-20';
}
