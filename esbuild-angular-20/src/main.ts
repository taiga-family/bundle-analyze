import { bootstrapApplication } from '@angular/platform-browser';
import {provideEventPlugins} from '@taiga-ui/event-plugins';
import {App} from "./app";
import {provideZonelessChangeDetection} from "@angular/core";

bootstrapApplication(App, {
providers: [provideEventPlugins(), provideZonelessChangeDetection()]
})
  .catch((err) => console.error(err));
