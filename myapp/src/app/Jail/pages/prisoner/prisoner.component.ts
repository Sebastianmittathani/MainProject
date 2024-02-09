import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface prisonerInterface {
  prisionerName: any;
  // prisionerGender: any;
  // address: any;
  // contactNumber: any;
  // emailId: any;
  // photo: any;
  // prisionerCode: any;
  // crimeDetails: any;
  // duration: any;
  // joinDate: any;
  // releaseDate: any;
  // status: any;

}

@Component({
  selector: 'app-prisoner',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './prisoner.component.html',
  styleUrl: './prisoner.component.css'
})

export class PrisonerComponent {
profileForm = new FormGroup(
  {
    prisioner: new FormControl(''),
  }

);
var: any = ''
onSubmit() {
  console.log(this.profileForm.value.prisioner);
  const prisionerdata: prisonerInterface = {
    prisionerName: this.profileForm.value.prisioner,
   
  };

  axios.post('http://localhost:5000/prisioner/',prisionerdata).then((respone) => {
    console.log(respone.data);
})
}
}
