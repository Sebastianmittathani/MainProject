import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import axios from 'axios';

interface notificationfetch {
  jail_name: any
  booking_id: any
  booking_status:any
  clear_status: any
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {}


  notification: notificationfetch[] = [];
  sid: any
  booking_id: any

  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  ngOnInit() {

    if (typeof sessionStorage !== 'undefined') {

      this.sid = sessionStorage.getItem('sid');// Access sessionStorage here

    }
    this.notifications();
  
  }

  notifications() {
    axios.get(`http://localhost:5000/notificationfromVol/${this.sid}`).then((response) => {
      this.notification = response.data.notitificationfromjail
      console.log(response.data.notitificationfromjail);
      
    })
  }

  clear(event: any) {
    this.booking_id = event
    axios.patch(`http://localhost:5000/clearnotification/${this.booking_id}`).then((response) => {
      this.notifications() 
    })
  }






  openmenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }
  logout(){
    sessionStorage.removeItem('sid');
    this.router.navigate(['/Guest/Login']);
  }
}


