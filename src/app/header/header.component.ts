import { Component } from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {SignInComponent} from "../body/sign-in/sign-in.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
      CommonModule,
      RouterModule,
      MdbCollapseModule,
      MdbRippleModule,
      SignInComponent
    ],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent{

  modalRef: MdbModalRef<SignInComponent> | null = null;

  constructor(private modalService: MdbModalService) {
  }

  openModal() {
    this.modalRef = this.modalService.open(SignInComponent)
  }
}
