import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';
import { log } from 'console';

interface shopregisterInterface {
  place_id: any,
  shop_name: any,
  contact_number: any,
  shop_address: any,
  shop_email: any,
}

interface districtFetch {
  district_name: any,
  district_id: any
}

interface placeFetch {
  place_id: any,
  place_name: any,
  // district_id:any
  district_name: any
}






// interface fetchregister {
//   district_name: any,
//   district_id: any

// }

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  filedata: any

  data: districtFetch[] = [];

  placedata: placeFetch[] = [];

  profileForm1 = new FormGroup(
    {
      district_id: new FormControl(''),
      place_id: new FormControl(''),
      shop_name: new FormControl(''),
      contact_number: new FormControl(''),
      shop_address: new FormControl(''),
      shop_email: new FormControl(''),
      shop_logo: new FormControl('')


    }
  );
  var: any = ''

  handleFile(event: any) {
    this.filedata = event.target.files[0]

  }
  onSubmit() {
    
    const UserData: shopregisterInterface = {
      place_id: this.profileForm1.value.place_id,
      shop_name: this.profileForm1.value.shop_name,
      contact_number: this.profileForm1.value.contact_number,
      shop_address: this.profileForm1.value.shop_address,
      shop_email: this.profileForm1.value.shop_email,
    };

    const userformdata = new FormData();
    

    userformdata.append('shop_logo', this.filedata);
    userformdata.append('shop_name', UserData.shop_name);
    userformdata.append('contact_number', UserData.contact_number);
    userformdata.append('shop_email', UserData.shop_email);
    userformdata.append('shop_address', UserData.shop_address);

    
    

    

    axios.post('http://localhost:5000/ShopRegister/', userformdata).then((response) => {
      // console.log(response.data);
      alert(response.data.message)
      this.profileForm1.reset();
      // this.placeFetch();
    })
  }
  ngOnInit() {
    this.districtFetch()
  }
  districtFetch() {
    axios.get('http://localhost:5000/District/').then((response) => {
      // console.log(response.data.district)
      this.data = response.data.district
    })
  }
  placeFetch(event: any) {
    // console.log('hi')   
    // console.log(event) 
    const selectedDistrictId = event.target.value;
    // console.log(selectedDistrictId)
    axios.get(`http://localhost:5000/Place/${selectedDistrictId}`).then((response) => {
      // console.log(response.data.place)
      this.placedata = response.data.place
    })
  }
}