import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface replyfetch {
  complaint_reply: any;
  complaint_id: any;
 jail_id:any;
}

interface complaintfetch {
  complaint_title: any;
  complaint_details: any;
  complaint_id: any;

}

@Component({
  selector: 'app-viewcomplaint',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './viewcomplaint.component.html',
  styleUrl: './viewcomplaint.component.css'
})
export class ViewcomplaintComponent {

  replydata: replyfetch[] = [];
  complaintdata:complaintfetch[] = [];
  sid: any;
  complaint_id :any
  replyId: any;

  

  ngOnInit() {
  

    if (typeof sessionStorage !== 'undefined') {

      this.sid = sessionStorage.getItem('jid');// Access sessionStorage here

    }
    this.complaintfetch()

  }


  complaintfetch() {




    axios.get(`http://localhost:5000/complaintdetails/${this.sid}`).then((response) => {
      console.log(response.data.complaintdata)

      this.complaintdata = response.data.complaintdata
      console.log(response.data.complaintdata);
      




    })
  }

  replyForm = new FormGroup(
    {
      complaint_reply: new FormControl(''),
    
    }
  );

  rep() {
    const data: replyfetch = {
      complaint_reply: this.replyForm.value.complaint_reply,
      complaint_id:3,
      jail_id: sessionStorage.getItem("jid")
    };

    axios.patch('http://localhost:5000/complaintReply/', data).then((response) => {
      alert(response.data.message)
    })

  }

  reply(event: any) {

    this.replyId = event;
  }

 

}
