import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface shopregisterInterface {
  district_id: any,
  place_id: any,
  shop_name: any,
  shop_email: any,
  shop_contact: any,
  shop_address: any,
  shop_licenseproof: any,
  shop_ownername: any,
  shop_username: any,
  shop_password: any,
  shop_status: any
  shop_logo: any,

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

  shopForm = new FormGroup(
    {
      district_id: new FormControl(''),
      place_id: new FormControl(''),
      shop_name: new FormControl(''),
      shop_email: new FormControl(''),
      shop_contact: new FormControl(''),
      shop_address: new FormControl(''),
      shop_licenseproof: new FormControl(''),
      shop_ownername: new FormControl(''),
      shop_username: new FormControl(''),
      shop_password: new FormControl(''),
      shop_status: new FormControl(''),
      shop_logo: new FormControl(''),





    }
  );
  var: any = ''

  handleFile(event: any) {
    this.filedata = event.target.files[0]

  }
  onSubmit() {
    if (this.shopForm.valid) {
      const password = this.shopForm.value.shop_password;
      const input = this.shopForm.value.shop_name;
      const number = this.shopForm.value.shop_contact;
      const email = this.shopForm.value.shop_email;
      const ownername = this.shopForm.value.shop_ownername;
      const username = this.shopForm.value.shop_licenseproof;



      if (!password) {
        alert("Password is required.");
        return;
      }

      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
      const isPasswordValid = passwordRegex.test(password);

      if (!isPasswordValid) {
        alert("Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.");
        return;
      }

      // Check if the input is empty
      if (!username) {
        alert("Input is required.");
        return;
      }

      // Extract the first word from the input
      const Word = username.trim().split(/\s+/)[0];

      // Check if the first word starts with a capital letter
      const isCapitalized = /^[A-Z].*/.test(Word);

      if (!isCapitalized) {
        alert("The first word must start with a capital letter.");
        return;
      }

      // Check if the input is empty
      if (!ownername) {
        alert("Input is required.");
        return;
      }

      // Extract the first word from the input
      const SecondWord = ownername.trim().split(/\s+/)[0];

      // Check if the first word starts with a capital letter
      const isSecondWordCapitalized = /^[A-Z].*/.test(SecondWord);

      if (!isSecondWordCapitalized) {
        alert("The first word must start with a capital letter.");
        return;
      }

      // Check if the input is empty
      if (!number) {
        alert("Phone number is required.");
        return;
      }



      // Check if the phone number has 10 digits
      const isValidPhoneNumber = /^\d{10}$/.test(number);

      if (!isValidPhoneNumber) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }

     
      // Check if the input is empty
      if (!email) {
        alert("Email is required.");
      } else {
        // Check if the input matches the email pattern
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (isValidEmail) {
          alert("The email address is valid.");
        } else {
          alert("Please enter a valid email address.");
        }
      }

      // Check if the input is empty
      if (!input) {
        alert("Input is required.");
        return;
      }

      // Extract the first word from the input
      const firstWord = input.trim().split(/\s+/)[0];

      // Check if the first word starts with a capital letter
      const isFirstWordCapitalized = /^[A-Z].*/.test(firstWord);

      if (!isFirstWordCapitalized) {
        alert("The first word must start with a capital letter.");
        return;
      }







      const UserData: shopregisterInterface = {
        place_id: this.shopForm.value.place_id,
        district_id: this.shopForm.value.district_id,
        shop_name: this.shopForm.value.shop_name,
        shop_email: this.shopForm.value.shop_email,
        shop_contact: this.shopForm.value.shop_contact,
        shop_address: this.shopForm.value.shop_address,
        shop_licenseproof: this.shopForm.value.shop_licenseproof,
        shop_ownername: this.shopForm.value.shop_ownername,
        shop_username: this.shopForm.value.shop_username,
        shop_password: this.shopForm.value.shop_password,
        shop_status: this.shopForm.value.shop_status,
        shop_logo: this.shopForm.value.shop_logo,
      };





      const userformdata = new FormData();


      userformdata.append('shop_logo', this.filedata);
      userformdata.append('place_id', UserData.place_id);
      userformdata.append('shop_name', UserData.shop_name);
      userformdata.append('shop_email', UserData.shop_email);
      userformdata.append('shop_contact', UserData.shop_contact);
      userformdata.append('shop_address', UserData.shop_address);
      userformdata.append('shop_licenseproof', UserData.shop_licenseproof);
      userformdata.append('shop_ownername', UserData.shop_ownername);
      userformdata.append('shop_username', UserData.shop_username);
      userformdata.append('shop_password', UserData.shop_password);
      userformdata.append('shop_status', UserData.shop_status);







      axios.post('http://localhost:5000/ShopRegister/', userformdata).then((response) => {
        // console.log(response.data);
        alert(response.data.message)
        this.shopForm.reset();
      })
    } else {
      alert("Please fill out all required fields correctly.");

    }
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