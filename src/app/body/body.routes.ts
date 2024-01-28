import {Routes} from "@angular/router";
import {GoogleMapComponent} from "./google-map/google-map.component";
import { BestPlacesComponent } from "./best-places/best-places.component";
import { CardComponent } from "./card/card.component";

export const BODY_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: GoogleMapComponent },
  { path:'best-places', pathMatch: 'full', component: BestPlacesComponent},
  { path:'best-places-information', component: CardComponent },
  { path: '**', component: GoogleMapComponent }
]
