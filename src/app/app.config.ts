import { ApplicationConfig } from '@angular/core';
import {provideRouter} from "@angular/router";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: '',
        loadChildren: () => import('./body/body.routes')
          .then(r => r.BODY_ROUTES)
      },
    ])
  ]
};
