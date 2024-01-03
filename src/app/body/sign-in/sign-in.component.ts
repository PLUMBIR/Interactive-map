import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(public modalRef: MdbModalRef<SignInComponent>) {
  }
}
