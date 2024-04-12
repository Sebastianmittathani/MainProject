import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GuestnavComponent } from '../guestnav/guestnav.component';

@Component({
  selector: 'app-guestmain',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,GuestnavComponent,RouterOutlet],
  templateUrl: './guestmain.component.html',
  styleUrl: './guestmain.component.css'
})
export class GuestmainComponent {

}
