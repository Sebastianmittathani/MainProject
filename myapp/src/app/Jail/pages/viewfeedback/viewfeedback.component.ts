import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface feedbackfetch {
  feedback_title: any;
  feedback_details: any;
  feedback_id: any;
  product_name:any;
  shop_name:any;

}

@Component({
  selector: 'app-viewfeedback',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './viewfeedback.component.html',
  styleUrl: './viewfeedback.component.css'
})
export class ViewfeedbackComponent {

  feedbackdata:feedbackfetch[] = [];
  sid: any;
  feedback_id :any
  product_name:any


  

  ngOnInit() {
  

    if (typeof sessionStorage !== 'undefined') {

      this.sid = sessionStorage.getItem('jid');// Access sessionStorage here

    }
    this.fetchfeedback()

  }


  fetchfeedback() {




    axios.get(`http://localhost:5000/viewfeedback/${this.sid}`).then((response) => {
      console.log(response.data.feedbackdata)

      this.feedbackdata = response.data.feedbackdata
      console.log(response.data.feedbackdata);
      




    })
  }



 

}
