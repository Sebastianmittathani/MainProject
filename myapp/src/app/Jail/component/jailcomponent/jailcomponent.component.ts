import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { JailnavComponent } from '../jailnav/jailnav.component';
import { JailsideComponent } from '../jailside/jailside.component';

@Component({
  selector: 'app-jailcomponent',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet,JailnavComponent,JailsideComponent],
  templateUrl: './jailcomponent.component.html',
  styleUrl: './jailcomponent.component.css'
})
export class JailcomponentComponent {

}
