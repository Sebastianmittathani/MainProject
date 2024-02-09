import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shopmain',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './shopmain.component.html',
  styleUrl: './shopmain.component.css'
})
export class ShopmainComponent {

}
