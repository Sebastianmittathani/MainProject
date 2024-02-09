import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';


interface CentralJailInterface {
  jail_name: any,
  place_id: any,
  district_id: any,
  jail_photo:any
}
interface districtfetch {
  district_name: any,
  district_id: any
}
interface placefetch {
  place_name: any,
  district_name: any,
  place_id: any
}
interface jailfetch {
  place_name: any,
  district_name: any,
  jail_name: any,
  jail_id: any,
  jail_photo: any
}
@Component({
  selector: 'app-centraljail',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './centraljail.component.html',
  styleUrl: './centraljail.component.css'
})
export class CentraljailComponent {
  districtdata: districtfetch[] = [];
  placedata: placefetch[] = [];
  jaildata: jailfetch[] = [];


  ngOnInit() {
    this.fetchdistrict();
    this.fetchplace();
    this.fetchjail();
  }
  fetchdistrict() {
    axios.get('http://localhost:5000/District').then((response) => {
      console.log(response.data.district);
      this.districtdata = response.data.district
      })
  }
  fetchplace() {
    axios.get('http://localhost:5000/Place').then((response) => {
      console.log(response.data.placedata);
      this.placedata = response.data.place
     })
  }
  fetchjail() {
    axios.get('http://localhost:5000/Place').then((response) => {
      console.log(response.data.placedata);
      this.jaildata = response.data.jail
     })
  }

  jailForm = new FormGroup(
    {
      jail_name: new FormControl(''),
      jail_photo: new FormControl(''),
      place_id: new FormControl(''),
      district_id: new FormControl(''),
    
    }
  );
  var: any = ''
  onSubmit() {
    const jaildata: CentralJailInterface  = {
      jail_name: this.jailForm.value.jail_name,
      jail_photo: this.jailForm.value.jail_photo,
      district_id: this.jailForm.value.district_id,
      place_id: this.jailForm.value.place_id

  };

  axios.post('http://localhost:5000/CentralJail/',jaildata).then((response) => {
    console.log(response.data);
  })



}

}
