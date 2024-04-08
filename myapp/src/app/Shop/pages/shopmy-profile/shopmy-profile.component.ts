import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface shopProfile {
  shop_name: any,
  shop_email: any,
  shop_contact: any,
  shop_address: any,
  shop_licenseproof: any,
  shop_ownername: any,
  shop_username: any,
  shop_logo: any,

}

@Component({
  selector: 'app-shopmy-profile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './shopmy-profile.component.html',
  styleUrl: './shopmy-profile.component.css'
})
export class ShopmyProfileComponent {
  shopdata!: shopProfile;
  sid :any
 

  ngOnInit() {
   
    this.shopFetch();
  }

  shopFetch() {

    if (typeof sessionStorage !== 'undefined') {

      this.sid = sessionStorage.getItem('sid');// Access sessionStorage here
      
  }


    axios.get(`http://localhost:5000/shopmyprofile/${this.sid}` ).then((response) => {
      console.log(response.data.shop)
     
     this.shopdata = response?.data?.shop[0]



   })
  }
}
