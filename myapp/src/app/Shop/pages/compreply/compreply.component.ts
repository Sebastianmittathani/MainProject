import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface complaintreply {
  complaint_title: any,
  complaint_details: any,
  complaint_id : any;
  jail_name : any;
  complaint_reply: any;
}


@Component({
  selector: 'app-compreply',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './compreply.component.html',
  styleUrl: './compreply.component.css'
})
export class CompreplyComponent {

  complaintdata: complaintreply[] = [];
  sid: any;

  

  ngOnInit() {
    
    console.log("hi");
    
    if (typeof sessionStorage !== 'undefined') {

      this.sid = sessionStorage.getItem('sid');// Access sessionStorage here

    }
    this.replydetails()

  }

  replydetails() {




    axios.get(`http://localhost:5000/Viewcomplaintreply/${this.sid}`).then((response) => {
      // console.log(response.data.booking)

      this.complaintdata = response.data.complaintdata
      console.log(response.data.complaintdata);
      




    })
  }

}

