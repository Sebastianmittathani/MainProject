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
  selector: 'app-viewcomp-reply',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './viewcomp-reply.component.html',
  styleUrl: './viewcomp-reply.component.css'
})
export class ViewcompReplyComponent {

  complaintdata: complaintreply[] = [];
  sid: any;
  jid: any;

  

  ngOnInit() {

    if (typeof sessionStorage !== 'undefined') {

      this.sid = sessionStorage.getItem('sid');// Access sessionStorage here

    }
    this.replydetails()

  }

  replydetails() {




    axios.get(`http://localhost:5000/Viewcomplaintreply/${this.sid}`).then((response) => {
      // console.log(response.data.booking)

      this.complaintdata = response.data.complaintreply
      console.log(response.data.complaintreply);
      




    })
  }

}
