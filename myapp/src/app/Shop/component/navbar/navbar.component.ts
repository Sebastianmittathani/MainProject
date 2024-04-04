import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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

  notification: notificationfetch[] = [];
  sid: any
  booking_id: any
  // apply_id:any

  constructor() { }
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  ngOnInit() {

    if (typeof sessionStorage !== 'undefined') {

      this.sid = sessionStorage.getItem('sid');// Access sessionStorage here

    }
    this.notifications();
    // this.infonotificationd();
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


  // infonotificationd() {
  //   axios.get(`http://localhost:5000/infonotification/${this.uid}`).then((response) => {
  //     this.notitificationofinfo = response.data.notitificationofinfo  
  //   })
  // }

  // clearinfo(event: any) {
  //   this.apply_id = event
  //   axios.patch(`http://localhost:5000/clearnotificationofinfo/${this.apply_id}`).then((response) => {
  //     this.notifications() 
  //     // this.infonotificationd() 
  //   })
  // }



  openmenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }
}


