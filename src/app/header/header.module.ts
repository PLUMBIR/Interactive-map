import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import {SignInComponent} from "../body/sign-in/sign-in.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdbCollapseModule,
    MdbRippleModule,
    SignInComponent
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})

export class HeaderModule { }
