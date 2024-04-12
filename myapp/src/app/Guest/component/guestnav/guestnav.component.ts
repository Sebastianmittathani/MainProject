import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-guestnav',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './guestnav.component.html',
  styleUrl: './guestnav.component.css'
})
export class GuestnavComponent {

}
