import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import axios from 'axios';
import { AnyARecord } from 'dns';

interface fetchjail {
  jail_name: any,
  // district_name: any,
  jail_contact: any,
  jail_address: any,
  jail_email: any,
  jail_id:any
}
interface districtFetch {
  district_name: any,
  district_id: any
}

// interface placeFetch {
//   place_id: any,
//   place_name: any,
//   // district_id:any
//   district_name: any
// }


@Component({
  selector: 'app-viewjail',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './viewjail.component.html',
  styleUrl: './viewjail.component.css'
})
export class ViewjailComponent {
  jaildata: fetchjail[] = [];
  data: districtFetch[] = [];
  // placedata: placeFetch[] = [];


  ngOnInit() {
    this.fetchjail();
    this.districtFetch()
  }

  fetchjail() {
    axios.get('http://localhost:5000/jailfetch').then((response) => {
      // console.log(response.data.jaildata);
      this.jaildata = response.data.jail
    })
  }
  jailfetchdatabyID(event:any) {
    const selectedjailId = event.target.value;
  
    axios.get(`http://localhost:5000/jailfetchbyId/${selectedjailId}`,).then((response) => {
      // console.log(response.data.jaildata)

      this.jaildata = response.data.jaildatabyId
      


    })
  }
  districtFetch() {
    axios.get('http://localhost:5000/District/').then((response) => {
      // console.log(response.data.district)
      this.data = response.data.district
    })
  }

}
