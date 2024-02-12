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
  jail_password: any
}
@Component({
  selector: 'app-centraljail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './centraljail.component.html',
  styleUrl: './centraljail.component.css'
})
export class CentraljailComponent {
  districtdata: districtfetch[] = [];
  jaildata: jailfetch[] = [];


  ngOnInit() {
    this.fetchdistrict();
    this.fetchjail();
  }
  fetchdistrict() {
    axios.get('http://localhost:5000/District').then((response) => {
      // console.log(response.data.district);
      this.districtdata = response.data.district
    })
  }
 
  fetchjail() {
    axios.get('http://localhost:5000/Jail').then((response) => {
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
    const jaildata: JailInterface = {
      jail_name: this.jailForm.value.jail_name,
      district_id: this.jailForm.value.district_id,
      jail_contact: this.jailForm.value.jail_contact,
      jail_address: this.jailForm.value.jail_address,
      jail_password: this.jailForm.value.jail_password,
      jail_username: this.jailForm.value.jail_username,
      jail_email: this.jailForm.value.jail_email
      

    };

    axios.post('http://localhost:5000/Jail/', jaildata).then((response) => {
      console.log(response.data);
    })



  }

}
