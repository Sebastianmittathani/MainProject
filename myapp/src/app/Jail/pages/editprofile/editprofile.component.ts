import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface editprofile {
  jail_name: any,
  jail_contact: any,
  jail_username: any,
  jail_address: any,
}

@Component({
  selector: 'app-editprofile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})
export class EditprofileComponent {
  jid: any

  editprofile = new FormGroup(
    {
      jail_name: new FormControl(''),
      jail_contact: new FormControl(''),
      jail_username: new FormControl(''),
      jail_address: new FormControl(''),
    }
  );

  ngOnInit() {
    this.Getprofile();
  }
  
  Getprofile(){

    
    if (typeof sessionStorage !== 'undefined') {

      this.jid = sessionStorage.getItem('jid');// Access sessionStorage here
      
  }

    axios.get(`http://localhost:5000/getjail/${this.jid}`).then((response) => {
      // console.log(response.data.district[0].district_name)
      this.editprofile.get('jail_name')?.setValue(response.data.jail[0].jail_name);
      this.editprofile.get('jail_contact')?.setValue(response.data.jail[0].jail_contact);
      this.editprofile.get('jail_username')?.setValue(response.data.jail[0].jail_username);
      this.editprofile.get('jail_address')?.setValue(response.data.jail[0].jail_address);

      // this.check = index

    })


  }
  onSubmit() {
    

    const editdata: editprofile = {
      jail_name: this.editprofile.value.jail_name,
      jail_contact: this.editprofile.value.jail_contact,
      jail_username: this.editprofile.value.jail_username,
      jail_address: this.editprofile.value.jail_address,

    };

    axios.patch(`http://localhost:5000/editjail/${this.jid}`, editdata).then((response) => {
    
      alert(response.data.message);
    
      
    })
}
}
