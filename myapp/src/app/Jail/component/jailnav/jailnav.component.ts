import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import axios from 'axios';

interface notificationfetch {
  shop_name: any
  booking_id: any
  booking_status:any
  clear_status: any
}


@Component({
  selector: 'app-jailnav',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './jailnav.component.html',
  styleUrl: './jailnav.component.css'
})
export class JailnavComponent {

  notification: notificationfetch[] = [];
  jid: any
  booking_id: any
  // apply_id:any

  constructor() { }
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  ngOnInit() {

    if (typeof sessionStorage !== 'undefined') {

      this.jid = sessionStorage.getItem('jid');// Access sessionStorage here

    }
    this.notifications();
    // this.infonotificationd();
  }

  notifications() {
    // console.log('hi');
    
    axios.get(`http://localhost:5000/notificationfromshop/${this.jid}`).then((response) => {
      this.notification = response.data.notitificationfromshop
      console.log(response.data.notitificationfromshop);
      
    })
  }

  clear(event: any) {
    this.booking_id = event
    axios.patch(`http://localhost:5000/clearnotificationshop/${this.booking_id}`).then((response) => {
      this.notifications() 
    })
  }






  openmenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

}
