import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-jailside',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './jailside.component.html',
  styleUrl: './jailside.component.css'
})
export class JailsideComponent {

  constructor(private router: Router) {}

  logout(){
    sessionStorage.removeItem('aid');
    this.router.navigate(['/Guest/Login']);
  }

}
