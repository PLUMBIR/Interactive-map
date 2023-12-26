import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Interactive-map';
}
