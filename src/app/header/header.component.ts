import { Component } from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {SignInComponent} from "../body/sign-in/sign-in.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { SignUpComponent } from '../body/sign-up/sign-up.component';

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

  signInModalRef: MdbModalRef<SignInComponent> | null = null;

  signUpModalRef: MdbModalRef<SignUpComponent> | null = null;

  constructor(private modalService: MdbModalService) {
  }

  openSignInModal() {
    this.signInModalRef = this.modalService.open(SignInComponent, {
      modalClass: 'modal-dialog-centered'
    })
  }

  // openModal() {
  //   this.modalRef = this.modalService.open(SignInComponent)
  // }

  openSignUpModal(){
    this.signUpModalRef = this.modalService.open(SignUpComponent, {
      modalClass: 'modal-dialog-centered'
    })
  }
}
