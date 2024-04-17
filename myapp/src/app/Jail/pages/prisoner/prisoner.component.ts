import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface prisonerInterface {
  prisioner_name: any;
  prisioner_gender: any;
  prisioner_address: any;
  prisioner_contact: any;
  prisioner_email: any;
  prisioner_photo: any;
  prisioner_code: any;
  prisioner_crimedetails: any;
  prisioner_duration: any;
  prisioner_joindate: any;
  prisioner_releasedate: any;
  prisioner_status: any;
  jail_id: any;

}


interface prisionerfetch {
  prisioner_name: any;
  prisioner_gender: any;
  prisioner_address: any;
  prisioner_contact: any;
  prisioner_email: any;
  prisioner_photo: any;
  prisioner_code: any;
  prisioner_crimedetails: any;
  prisioner_duration: any;
  prisioner_joindate: any;
  prisioner_releasedate: any;
  prisioner_status: any;
  prisioner_id: any;
  jail_name: any

}

@Component({
  selector: 'app-prisoner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './prisoner.component.html',
  styleUrl: './prisoner.component.css'
})

export class PrisonerComponent {

  prisionerdata: prisionerfetch[] = []
  check: number = 0
  prisionerForm = new FormGroup(
    {
      prisioner_name: new FormControl(''),
      prisioner_gender: new FormControl(''),
      prisioner_address: new FormControl(''),
      prisioner_contact: new FormControl(''),
      prisioner_email: new FormControl(''),
      prisioner_photo: new FormControl(''),
      prisioner_crimedetails: new FormControl(''),
      prisioner_duration: new FormControl(''),
      prisioner_joindate: new FormControl(''),
      prisioner_releasedate: new FormControl(''),
      prisioner_status: new FormControl(''),
      prisioner_code: new FormControl(''),
      jail_id: new FormControl(''),
    }

  );
  var: any = ''
  prisionerfetch: any;
  onSubmit() {

    if (this.prisionerForm.valid) {
      const Name = this.prisionerForm.value.prisioner_name;
      
      if (!Name) {
        alert("Shop name is required.");
        return;
      }
  
      // Check if the shop name starts with a capital letter
      const isValidShopName = /^[A-Z][a-zA-Z\s]*$/.test(Name);
  
      if (!isValidShopName) {
        alert("Please enter a prisioner name starting with a capital letter.");
        return;
      }
  
      // Rest of your code for form submission
      // ...
    } else {
      alert("Please fill out all required fields correctly.");
    }

    if (this.prisionerForm.valid) {
      const phoneNumber = this.prisionerForm.value.prisioner_contact;
      
      if (!phoneNumber) {
        alert("Phone number is required.");
        return;
      }
  
      // Check if the phone number has exactly 10 digits
      const isValidPhoneNumber = /^\d{10}$/.test(phoneNumber);
  
      if (!isValidPhoneNumber) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }
  
      // Rest of your code for form submission
      // ...
    } else {
      alert("Please fill out all required fields correctly.");
    }

    if (this.prisionerForm.valid) {
      const phoneNumber = this.prisionerForm.value.prisioner_code;
      
      if (!phoneNumber) {
        alert("Prisioner code is required.");
        return;
      }
  
      // Check if the phone number has exactly 10 digits
      const isValidPhoneNumber = /^\d{5}$/.test(phoneNumber);
  
      if (!isValidPhoneNumber) {
        alert("Please enter the prisioner code.");
        return;
      }
  
      // Rest of your code for form submission
      // ...
    } else {
      alert("Please fill out all required fields correctly.");
    }

    if (this.prisionerForm.valid) {
      const crime = this.prisionerForm.value.prisioner_crimedetails;
      
      if (!crime) {
        alert("Enter the crime details.");
        return;
      }
  
      // Check if the shop name starts with a capital letter
      const isValidShopName = /^[A-Z][a-zA-Z\s]*$/.test(crime);
  
      if (!isValidShopName) {
        alert("Please enter prisioner name the prisioner crime details.");
        return;
      }
  
      // Rest of your code for form submission
      // ...
    } else {
      alert("Please fill out all required fields correctly.");
    }

    if (this.prisionerForm.valid) {
      const prisioner_duration = this.prisionerForm.value.prisioner_duration;
      
      if (!prisioner_duration) {
        alert("Prisoner time period to be prisioned.");
        return;
      }
  
      // Check if the prisoner code contains only numbers
      const isValidPrisonerCode = /^\d+$/.test(prisioner_duration);
  
      if (!isValidPrisonerCode) {
        alert("Please Prisoner time period to be prisioned.");
        return;
      }
  
      // Rest of your code for form submission
      // ...
    } else {
      alert("Please fill out all required fields correctly.");
    }
    if (this.prisionerForm.valid) {
      const dateOfBirth = this.prisionerForm.value.prisioner_joindate;
      
      if (!dateOfBirth) {
        alert("joindate  is required.");
        return;
      }
  
      // Check if the input value can be parsed as a valid date
      const isValidDateOfBirth = !isNaN(Date.parse(dateOfBirth));
  
      if (!isValidDateOfBirth) {
        alert("Please enter joindate.");
        return;
      }
  
      // Rest of your code for form submission
      // ...
    } else {
      alert("Please fill out all required fields correctly.");
    }
    if (this.prisionerForm.valid) {
      const dateOfBirth = this.prisionerForm.value.prisioner_releasedate;
      
      if (!dateOfBirth) {
        alert("releasedate  is required.");
        return;
      }
  
      // Check if the input value can be parsed as a valid date
      const isValidDateOfBirth = !isNaN(Date.parse(dateOfBirth));
  
      if (!isValidDateOfBirth) {
        alert("Please enter releasedate.");
        return;
      }
  
      // Rest of your code for form submission
      // ...
    } else {
      alert("Please fill out all required fields correctly.");
    }


    

    console.log(this.prisionerForm.value);
    const prisionerdata: prisonerInterface = {
      prisioner_name: this.prisionerForm.value.prisioner_name,
      prisioner_gender: this.prisionerForm.value.prisioner_gender,
      prisioner_address: this.prisionerForm.value.prisioner_address,
      prisioner_contact: this.prisionerForm.value.prisioner_contact,
      prisioner_email: this.prisionerForm.value.prisioner_email,
      prisioner_photo: this.prisionerForm.value.prisioner_photo,
      prisioner_crimedetails: this.prisionerForm.value.prisioner_crimedetails,
      prisioner_duration: this.prisionerForm.value.prisioner_duration,
      prisioner_joindate: this.prisionerForm.value.prisioner_joindate,
      prisioner_releasedate: this.prisionerForm.value.prisioner_releasedate,
      prisioner_status: this.prisionerForm.value.prisioner_status,
      prisioner_code: this.prisionerForm.value.prisioner_code,
      jail_id: sessionStorage.getItem("jid")
    };
    // if (this.check === 0) {
      axios.post('http://localhost:5000/Prisioner/', prisionerdata).then((response) => {
        console.log(response.data);
        alert(response.data.message)
      })
    // }
    // else {
    //   axios.patch(`http://localhost:5000/Prisioner/${this.check}`, prisionerdata).then((response) => {
    //     // console.log(response.data);
    //     alert(response.data.message)
    //     this.prisionerfetch();
    //     this.prisionerForm.reset();
    //     this.check = 0
    //   })
    // }
  }

  ngOnInit() {
    this.fetchprisioner();
  }
  fetchprisioner() {
    axios.get('http://localhost:5000/Prisioner/').then((response) => {
      this.prisionerdata = response.data.prisioner
      console.log(response.data.prisioner);

    })

  }
  deleteRow(index: number): void {
    axios.delete(`http://localhost:5000/Prisioner/${index}`).then((response) => {
      console.log(response.data);
      this.fetchprisioner();
    })
  }
  // updateprisioner(index: number): any {
  //   console.log(index);
  //   axios.get(`http://localhost:5000/updateprisioner/${index}`).then((response) => {

  //     this.prisionerForm.get('prisioner_name')?.setValue(response.data.prisioner[0].prisioner_name);
  //     this.prisionerForm.get('prisioner_gender')?.setValue(response.data.prisioner[0].prisioner_gender);
  //     this.prisionerForm.get('prisioner_contact')?.setValue(response.data.prisioner[0].prisioner_contact);
  //     this.prisionerForm.get('prisioner_photo')?.setValue(response.data.prisioner[0].prisioner_photo);
  //     this.prisionerForm.get('prisioner_code')?.setValue(response.data.prisioner[0].prisioner_code);
  //     this.prisionerForm.get('prisioner_crimedetails')?.setValue(response.data.prisioner[0].prisioner_crimedetails);
  //     this.prisionerForm.get('prisioner_duration')?.setValue(response.data.prisioner[0].prisioner_duration);
  //     this.prisionerForm.get('prisioner_joindate')?.setValue(response.data.prisioner[0].prisioner_joindate);
  //     this.prisionerForm.get('prisioner_releasedate')?.setValue(response.data.prisioner[0].prisioner_releasedate);
  //     this.prisionerForm.get('prisioner_status')?.setValue(response.data.prisioner[0].prisioner_status);
  //     this.check = index
      

  //   })

  // }


}
