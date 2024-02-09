import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface placeInterface {
  place_name: any,
  district_id: any
}

interface districtfetch {
  district_name: any,
  district_id: any
}

interface placefetch {
  place_name: any,
  // district_id: any,
  district_name: any,
  place_id: any
}


@Component({
  selector: 'app-place',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './place.component.html',
  styleUrl: './place.component.css'
})
export class PlaceComponent {

  data: districtfetch[] = [];
  placedata: placefetch[] = [];

  deleteRow(index: number):void {
    axios.delete(`http://localhost:5000/Place/${index}`).then((response) => {
      console.log(response.data);
      this.placefetch();
  })
}

  ngOnInit() {
    this.fetchdistrict(); 
    this.placefetch();
  }
  fetchdistrict() {
    axios.get('http://localhost:5000/District').then((response) => {
      console.log(response.data.district);
      
      this.data = response.data.district
      
    })
  }
  placefetch() {
    axios.get('http://localhost:5000/Place').then((response) => {
      console.log(response.data.placedata);
      
      this.placedata = response.data.place
      
    })
  }

  placeForm = new FormGroup(
    {
      place_name: new FormControl(''),
      district_id: new FormControl(''),


    }
  );

  var: any = ''
  onSubmit() {
    // console.log(this.placeForm.value.place);
    const placedata: placeInterface = {
      place_name: this.placeForm.value.place_name,
      district_id: this.placeForm.value.district_id
    };

    axios.post('http://localhost:5000/place/', placedata).then((response) => {
      console.log(response.data);
    })

  }

} 
