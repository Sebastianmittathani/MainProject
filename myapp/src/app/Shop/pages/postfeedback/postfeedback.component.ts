import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import axios from 'axios';

interface feedbackfetch {
  feedback_title: any;
  feedback_details: any;
  booking_id: any;
  shop_id: any;
}


@Component({
  selector: 'app-postfeedback',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './postfeedback.component.html',
  styleUrl: './postfeedback.component.css'
})
export class PostfeedbackComponent {

  constructor(
    private route: ActivatedRoute) { }

  feedbackdata: feedbackfetch[] = [];
  bid: any
  

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.bid = params['booking_id']; // Access the 'msg' parameter
      console.log(this.bid);

      // Use the 'msg' value here
    });



  }
  
  feedbackForm = new FormGroup(
    {

      shop_id: new FormControl(''),
      feedback_title: new FormControl(''),
      feedback_details: new FormControl(''),
    }
  );
  var: any = ''
  onSubmit() {
    
    const feedbackdata: feedbackfetch = {
      feedback_title: this.feedbackForm.value.feedback_title,
      feedback_details: this.feedbackForm.value.feedback_details,
      booking_id: this.bid,

      shop_id: sessionStorage.getItem("sid"),
    
    };

    axios.post('http://localhost:5000/Postfeedback/', feedbackdata).then((response) => {
      // console.log(response.data);
      alert(response.data.message)
      this.feedbackForm.reset();
    })



  }

}
