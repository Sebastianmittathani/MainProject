import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface loginInterface {
   loginName: any;
} 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  profileForm = new FormGroup(
    {
      login: new FormControl(''),
    }
  );
  var: any =''
  onSubmit() {
    console.log(this.profileForm.value.login);
    const logindata: loginInterface = {
      loginName: this.profileForm.value.login,
    };
    axios.post('http://localhost:5000/login/',logindata).then((response) => {
      console.log(response.data);                                     
    })
  }


}
