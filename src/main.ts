import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ManuelTsFileModule } from './app/note1_manuel_create/manuel.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ManuelTsFileModule)
  .catch(err => console.error(err));


