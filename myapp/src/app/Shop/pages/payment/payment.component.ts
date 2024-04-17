import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import axios from 'axios';

interface payment {
  booking_id: any,
}

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  paymentdata: payment[] = [];
  sid: any;
  bid: any



  ngOnInit() {

    

    this.route.queryParams.subscribe(params => {
      this.bid = params['booking_id']; // Access the 'msg' parameter
      console.log(this.bid);

      // Use the 'msg' value here
    });

    if (typeof sessionStorage !== 'undefined') {

      this.sid = sessionStorage.getItem('jid');// Access sessionStorage here

    }

  }
  bookstat() {
    axios.patch(`http://localhost:5000/bookpay/${this.bid}`).then((response) => {
      this.router.navigate(['/Shop/mybooking']);



    })
  }



}
