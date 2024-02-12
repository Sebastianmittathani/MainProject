import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';


interface DistrictInterface {
  districtName: any;
}
interface districtfetch {
  district_name: any,
  district_id: any
}


@Component({
  selector: 'app-district',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent implements OnInit {

  data: districtfetch[] = [];
  check: number=0


  deleteRow(index: number): void {
    axios.delete(`http://localhost:5000/District/${index}`).then((response) => {
      console.log(response.data);
      this.fetchdistrict();
    })
  }


  ngOnInit() {
    this.fetchdistrict();
  }
  fetchdistrict() {
    axios.get('http://localhost:5000/District').then((response) => {
      this.data = response.data.district
    })
  }

  profileForm = new FormGroup(
    {
      district: new FormControl(''),
      place: new FormControl(''),
    }
  );
  var: any = ''
  onSubmit() {
    console.log(this.profileForm.value.district);
    // console.log(this.profileForm.value.place);
    const districtdata: DistrictInterface = {
      districtName: this.profileForm.value.district,



    };
    
    
    if (this.check === 0) {
      axios.post('http://localhost:5000/District/', districtdata).then((response) => {
        // console.log(response.data);
        alert(response.data.message)
        this.fetchdistrict();
        this.profileForm.reset();
      })

    }
    else {
      
      axios.patch(`http://localhost:5000/District/${this.check}`, districtdata).then((response) => {
        // console.log(response.data);
        alert(response.data.message)
        this.fetchdistrict();
        this.profileForm.reset();
        this.check = 0
      })

    }


  }
  getOneDistrict(index: number): any {
    // console.log(index);
    
    axios.get(`http://localhost:5000/oneDistrict/${index}`).then((response) => {
      console.log(response.data.district)
      this.profileForm.get('district')?.setValue(response.data.district[0].district_name);
      this.check = index

    })

  }
}

