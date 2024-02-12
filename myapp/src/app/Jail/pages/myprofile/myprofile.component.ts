import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface jailFetch {
  jail_name: any,
  district_id: any,
  jail_contact: any,
  jail_address: any,
  jail_email: any,
  jail_username: any,
  jail_password: any
}

@Component({
  selector: 'app-myprofile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent {

  jaildata: jailFetch[] = [];
  jid :any

  ngOnInit() {
    this.jid = sessionStorage.getItem("jid")
    this.jailFetch();
  }

  jailFetch(){
    axios.get(`http://localhost:5000/jail/${this.jid}` ).then((response) => {
      console.log(response.data.user)

     this.jaildata = response.data.user[0]



   })
  }
}
