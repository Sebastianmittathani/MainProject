import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface shopEditProfile {
  shop_name: any,
  shop_email: any,
  shop_contact: any,
  shop_address: any,
  shop_licenseproof: any,
  shop_ownername: any,
  shop_username: any,
  shop_status: any

}


@Component({
  selector: 'app-shopedit-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shopedit-profile.component.html',
  styleUrl: './shopedit-profile.component.css'
})
export class ShopeditProfileComponent {
  sid: any

  shopeditprofile = new FormGroup(
    {
      shop_name: new FormControl(''),
      shop_email: new FormControl(''),
      shop_contact: new FormControl(''),
      shop_address: new FormControl(''),
      shop_licenseproof: new FormControl(''),
      shop_ownername: new FormControl(''),
      shop_username: new FormControl(''),
      shop_status: new FormControl(''),
      
      
    }
  );

  ngOnInit() {
    this.Getprofile();
  }
  
  Getprofile(){

    
    if (typeof sessionStorage !== 'undefined') {

      this.sid = sessionStorage.getItem('sid');// Access sessionStorage here
      
  }

    axios.get(`http://localhost:5000/getshop/${this.sid}`).then((response) => {
      // console.log(response.data.district[0].district_name)
      this.shopeditprofile.get('shop_name')?.setValue(response.data.shop[0].shop_status);
      this.shopeditprofile.get('shop_email')?.setValue(response.data.shop[0].shop_email);
      this.shopeditprofile.get('shop_contact')?.setValue(response.data.shop[0].shop_contact);
      this.shopeditprofile.get('shop_address')?.setValue(response.data.shop[0].shop_address);
      this.shopeditprofile.get('shop_licenseproof')?.setValue(response.data.shop[0].shop_licenseproof);
      this.shopeditprofile.get('shop_ownername')?.setValue(response.data.shop[0].shop_ownername);
      this.shopeditprofile.get('shop_username')?.setValue(response.data.shop[0].shop_username);
      this.shopeditprofile.get('shop_status')?.setValue(response.data.shop[0].shop_status);


      // this.check = index

    })


  }
  onSubmit() {
    

    const editdata: shopEditProfile = {
      shop_name: this.shopeditprofile.value.shop_name,
      shop_email: this.shopeditprofile.value.shop_email,
      shop_contact: this.shopeditprofile.value.shop_contact,
      shop_address: this.shopeditprofile.value.shop_address,
      shop_licenseproof: this.shopeditprofile.value.shop_licenseproof,
      shop_ownername: this.shopeditprofile.value.shop_ownername,
      shop_username: this.shopeditprofile.value.shop_username,
      shop_status: this.shopeditprofile.value.shop_status,

    };

    axios.patch(`http://localhost:5000/editshop/${this.sid}`, editdata).then((response) => {
    
      alert(response.data.message);
    
      
    })
}

}
