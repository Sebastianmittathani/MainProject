import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import axios from 'axios';

interface bookproduct {
  product_name: any,
  product_details: any,
  product_photo: any,
  product_rate: any,
  product_id: any
}

interface booking {
  shop_id: any,
  product_id: any,
  booking_qty: any,
  booking_amount: any,
  booking_foredate: any,

}

@Component({
  selector: 'app-buyproduct',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './buyproduct.component.html',
  styleUrl: './buyproduct.component.css'
})
export class BuyproductComponent {
  constructor(private route: ActivatedRoute) { }

  productdata!: bookproduct;
  bookdata: booking[] = [];
  productId: any
  sid: any
  price: any
  show: any



  ngOnInit() {


    this.route.queryParams.subscribe(params => {
      this.productId = params['product_id']; // Access the 'msg' parameter
      console.log(this.productId);

      // Use the 'msg' value here
    });
    this.bookproduct();
  }

  bookproduct() {
    console.log(this.productId);

    axios.get('http://localhost:5000/bookproduct/' + this.productId).then((response) => {
      console.log(response.data.product[0]);
      this.productdata = response.data.product[0]
      this.price = response.data.product[0].product_rate


    })
  }

  bookForm = new FormGroup(
    {

      shop_id: new FormControl(''),
      product_id: new FormControl(''),
      booking_qty: new FormControl(''),
      booking_amount: new FormControl(''),
      booking_foredate: new FormControl(''),

    }
  );

  book(id: any) {



    const bookdata: booking = {
      product_id: id,
      booking_qty: this.bookForm.value.booking_qty,
      booking_amount: this.show,
      booking_foredate: this.bookForm.value.booking_foredate,
      shop_id: sessionStorage.getItem("sid")
    };
    axios.post('http://localhost:5000/bookdata/', bookdata).then((response) => {
      console.log(response.data);
      alert(response.data.message)
    })

  }

  calculate(event: any) {
    console.log('hi');
    
    let value = event.target.value;
    this.show = value * this.price
  }

 

}
