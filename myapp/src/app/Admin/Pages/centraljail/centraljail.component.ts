import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';


interface JailInterface {
  jail_name: any,
  district_id: any,
  jail_contact: any,
  jail_address: any,
  jail_email: any,
  jail_username: any,
  jail_password: any
}
interface districtfetch {
  district_name: any,
  district_id: any
}

interface jailfetch {
  district_name: any,
  jail_name: any,
  jail_id: any,
  jail_photo: any,
  jail_contact: any,
  jail_address: any,
  jail_username: any,
  jail_password: any,
  jail_email: any
}
@Component({
  selector: 'app-centraljail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './centraljail.component.html',
  styleUrl: './centraljail.component.css'
})
export class CentraljailComponent {
  data: districtfetch[] = [];
  jaildata: jailfetch[] = [];


  ngOnInit() {
    this.districtFetch();
    this.fetchjail();
  }
  districtFetch() {
    axios.get('http://localhost:5000/District/').then((response) => {
      // console.log(response.data.district)
      this.data = response.data.district
    })
  }
 
  fetchjail() {
    axios.get('http://localhost:5000/CentralJail').then((response) => {
      console.log(response.data.jaildata);
      this.jaildata = response.data.jail
    })
  }

  jailForm = new FormGroup(
    {
      jail_name: new FormControl(''),
      district_id: new FormControl(''),
      jail_contact: new FormControl(''),
      jail_address: new FormControl(''),
      jail_username: new FormControl(''),
      jail_password: new FormControl(''),
      jail_email: new FormControl('')

    }
  );
  var: any = ''
  onSubmit() {


    if (this.jailForm.valid) {
      const password = this.jailForm.value.jail_password;
      const input = this.jailForm.value.jail_name;
      const number = this.jailForm.value.jail_contact;
      const email = this.jailForm.value.jail_email;
      const ownername = this.jailForm.value.jail_username;


    //password
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
    }



    const jaildata: JailInterface = {
      jail_name: this.jailForm.value.jail_name,
      district_id: this.jailForm.value.district_id,
      jail_contact: this.jailForm.value.jail_contact,
      jail_address: this.jailForm.value.jail_address,
      jail_password: this.jailForm.value.jail_password,
      jail_username: this.jailForm.value.jail_username,
      jail_email: this.jailForm.value.jail_email
      

    };

    axios.post('http://localhost:5000/CentralJail/', jaildata).then((response) => {
      console.log(response.data);
      alert(response.data.message)
    })



  }


deleteRow(index: number): void {
  axios.delete(`http://localhost:5000/Jail/${index}`).then((response) => {
    console.log(response.data);
    this.fetchjail();
  })
}

}
