import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {FooterComponent} from "./footer/footer.component";
import {MdbModalModule} from "mdb-angular-ui-kit/modal";
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MdbCheckboxModule,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MdbModalModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Interactive map';
}
