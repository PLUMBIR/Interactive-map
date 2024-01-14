import {Routes} from "@angular/router";
import {GoogleMapFrameComponent} from "./google-map-frame/google-map-frame.component";

export const BODY_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: GoogleMapFrameComponent },
  { path: '**', component: GoogleMapFrameComponent }
]
