import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface complaintfetch {
  complaint_title: any;
  complaint_details: any;
  complaint_id: any;
  product_name: any;
  jail_name:any;
  shop_name:any;
  complaint_reply: any;

}

@Component({
  selector: 'app-complaintview',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './complaintview.component.html',
  styleUrl: './complaintview.component.css'
})
export class ComplaintviewComponent {

  complaintdata:complaintfetch[] = [];
  sid: any;
  complaint_id :any
  replyId: any;
  product_name: any

  

  ngOnInit() {
  

    this.complaintfetch()

  }


  complaintfetch() {




    axios.get('http://localhost:5000/viewcomplaintreplyAdmin/').then((response) => {
      console.log(response.data.complaintdata)

      this.complaintdata = response.data.complaintdata
      console.log(response.data.complaintdata);
      




    })
  }



}
