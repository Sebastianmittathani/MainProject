import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface bookdetails {
  product_name: any,
  booking_qty: any,
  booking_foredate: any,
  shop_name: any,
  shop_address: any,
  shop_contact: any,
  shop_email: any
}

@Component({
  selector: 'app-viewbooking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './viewbooking.component.html',
  styleUrl: './viewbooking.component.css'
})
export class ViewbookingComponent {


  bookdata: bookdetails[] = [];
  sid: any;

  ngOnInit() {

    if (typeof sessionStorage !== 'undefined') {

      this.sid = sessionStorage.getItem('jid');// Access sessionStorage here

    }
    this.bookdetails()

  }

  bookdetails() {




    axios.get(`http://localhost:5000/bookdetailsData/${this.sid}`).then((response) => {
      console.log(response.data.bookdata)

       this.bookdata = response.data.bookdata




    })
  }

}
