import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import axios from 'axios';

interface complaintfetch {
  complaint_title: any;
  complaint_details: any;
  booking_id: any;
  shop_id: any;
}



@Component({
  selector: 'app-postcomplaint',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './postcomplaint.component.html',
  styleUrl: './postcomplaint.component.css'
})
export class PostcomplaintComponent {

  constructor(
    private route: ActivatedRoute) { }

  complaintdata: complaintfetch[] = [];
  bid: any
  

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.bid = params['booking_id']; // Access the 'msg' parameter
      console.log(this.bid);

      // Use the 'msg' value here
    });



  }
  
  complaintForm = new FormGroup(
    {

      shop_id: new FormControl(''),
      complaint_title: new FormControl(''),
      complaint_details: new FormControl(''),
    }
  );
  var: any = ''
  onSubmit() {
    
    const complaintdata: complaintfetch = {
      complaint_title: this.complaintForm.value.complaint_title,
      complaint_details: this.complaintForm.value.complaint_details,
      booking_id: this.bid,

      shop_id: sessionStorage.getItem("sid"),
    
    };

    axios.post('http://localhost:5000/Postcomplaint/', complaintdata).then((response) => {
      // console.log(response.data);
      alert(response.data.message)
      this.complaintForm.reset();
    })



  }



}

