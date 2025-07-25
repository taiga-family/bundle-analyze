import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideEventPlugins} from '@taiga-ui/event-plugins';

bootstrapApplication(AppComponent, {
  providers: [provideEventPlugins()]
}).catch(error => console.error(error));
