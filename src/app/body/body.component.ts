import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbTabsModule} from "mdb-angular-ui-kit/tabs";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    CommonModule,
    MdbFormsModule,
    MdbTabsModule,
    RouterOutlet,
  ],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

}
