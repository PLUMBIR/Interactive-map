import {Routes} from "@angular/router";
import {GoogleMapFrameComponent} from "./google-map-frame/google-map-frame.component";
import { BestPlacesComponent } from "./best-places/best-places.component";

export const BODY_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: GoogleMapFrameComponent },
  { path:'best-places', pathMatch: 'full', component: BestPlacesComponent},
  { path: '**', component: GoogleMapFrameComponent }
]
