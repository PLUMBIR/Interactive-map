import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {FooterComponent} from "./footer/footer.component";
import {MdbModalModule} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MdbCheckboxModule,
    HeaderModule,
    FooterComponent,
    MdbModalModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Interactive map';
}
