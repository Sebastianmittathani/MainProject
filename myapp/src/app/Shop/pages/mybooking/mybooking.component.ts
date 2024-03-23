import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import axios from 'axios';

interface booking {
  booking_qty: any,
  booking_foredate: any,
  booking_id : any;
  jail_name : any;
  booking_status: any;
}

@Component({
  selector: 'app-mybooking',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './mybooking.component.html',
  styleUrl: './mybooking.component.css'
})
export class MybookingComponent {

 
  bookdata: booking[] = [];
  sid: any;
  jid: any;
  booking: any;

  

  ngOnInit() {

    if (typeof sessionStorage !== 'undefined') {

      this.sid = sessionStorage.getItem('sid');// Access sessionStorage here

    }
    this.bookdetails()

  }

  bookdetails() {




    axios.get(`http://localhost:5000/bookingreply/${this.sid}`).then((response) => {
      console.log(response.data.booking)

      this.bookdata = response.data.booking




    })
  }

}
