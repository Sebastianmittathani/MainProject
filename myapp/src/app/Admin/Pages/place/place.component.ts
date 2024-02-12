import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class PlaceComponent implements OnInit {

  data: districtfetch[] = [];
  placedata: placefetch[] = [];
  check: number = 0



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

    if (this.check === 0) {
      axios.post('http://localhost:5000/Place/', placedata).then((response) => {
        // console.log(response.data);
        alert(response.data.message)
        this.placefetch();
        this.placeForm.reset();
      })

    }
    else {
      axios.patch(`http://localhost:5000/Place/${this.check}`, placedata).then((response) => {
        // console.log(response.data);
        alert(response.data.message)
        this.placefetch();
        this.placeForm.reset();
        this.check = 0
      })

    }


  }
  // getOnePlace(index: number): any {
  //    console.log(index);
    
  //   axios.get(`http://localhost:5000/OnePlace/${index}`).then((response) => {
  //     console.log(response.data.place[0].place_name)
  //     this.placeForm.get('place_name')?.setValue(response.data.place[0].place_name);
  //     this.placeForm.get('district_id')?.setValue(response.data.place[0].district_id);
  //     this.check = index

  //   })

  // }
  getOnePlace(index: number): any {
    console.log(index);
    axios.get(`http://localhost:5000/OnePlace/${index}`).then((response) => {


      console.log(response.data.place[0].place_name)


      this.placeForm.get('place_name')?.setValue(response.data.place[0].place_name);
      this.placeForm.get('district_id')?.setValue(response.data.place[0].district_id);
      this.check = index

    })

  }
  deleteRow(index: number):void {
     // Remove the item at the specified index from the 'data' array
    axios.delete(`http://localhost:5000/Place/${index}`).then((response) => {
      // console.log(response.data);
      this.placefetch();
  })
}

  ngOnInit() {
    this.fetchdistrict(); 
    this.placefetch();
  }
  fetchdistrict() {
    axios.get('http://localhost:5000/District').then((response) => {
      // console.log(response.data.district);  
      this.data = response.data.district 
    })
  }
  placefetch() {
    axios.get('http://localhost:5000/Place').then((response) => {
      // console.log(response.data.placedata);
      
      this.placedata = response.data.place
      
    })
  }

} 
