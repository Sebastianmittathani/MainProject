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
  shop_email: any,
  booking_id : any;
  booking_status : any;
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
  booking_id :any

  

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

  bookstat(event: any) {
    this.booking_id  = event
    axios.patch(`http://localhost:5000/bookaccept/${this.booking_id }`).then((response) => {
      alert(response.data.message)
      


    })
  }

  bookrejct(event: any) {
    this.booking_id  = event
    axios.patch(`http://localhost:5000/bookreject/${this.booking_id }`).then((response) => {
      alert(response.data.message)


    })
  }

//   infoaccept(event:any){
//     this.apply_id=event
//   axios.patch(`http://localhost:5000/infoaccept/${this.apply_id}` ).then((response) => {
//     alert(response.data.message)
//     this.infoVerificationFetch()
//     this.infoverificationForm.reset();


//   })
//  }
//  inforreject(event:any){
//   this.apply_id=event
// axios.patch(`http://localhost:5000/inforeject/${this.apply_id}` ).then((response) => {
//   alert(response.data.message)
//   this.infoVerificationFetch()
//   this.infoverificationForm.reset();


// })
// }
}


