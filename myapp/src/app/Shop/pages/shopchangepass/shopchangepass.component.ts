import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface ChangeShopPass {
  newshop_password: any

}

@Component({
  selector: 'app-shopchangepass',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shopchangepass.component.html',
  styleUrl: './shopchangepass.component.css'
})
export class ShopchangepassComponent {
  sid: any;

  changeForm = new FormGroup({
    curshop_password: new FormControl(''),
    newshop_password: new FormControl(''),
    reshop_password: new FormControl(''),

  });
  curshop_password: any;
  shop_password: any;
  reshop_password: any;
  newshop_password: any;

  onSubmit() {
    const Formdata: ChangeShopPass = {
      newshop_password: this.changeForm.value.newshop_password,
    };
    console.log(this.changeForm.value);

    if (this.changeForm.value.curshop_password == this.shop_password) {

      if (this.changeForm.value.reshop_password == this.changeForm.value.newshop_password) {


        axios.patch(`http://localhost:5000/shopchangepass/${this.sid}`, FormData)
          .then((response) => {
            this.changeForm.reset();
            alert(response.data.message);
          })
          .catch((error) => {
            console.error('Error occurred while changing password:', error);
            // Handle error display or logging as needed
          });
      }
      else {
        console.log("error");

      }
    }
    else {
      console.log("error");

    }
    

  }
  ngOnInit() {
    this.GetShoppassword();
  }
  
  GetShoppassword() {
  
  
    if (typeof sessionStorage !== 'undefined') {
      this.sid = sessionStorage.getItem('sid');
    }
  
    axios.get(`http://localhost:5000/CentralJail/${this.sid}`).then((response) => {
      console.log(response.data.user[0].shop_password)
      this.shop_password = response.data.shop[0].shop_password;
    })
  
  }

}
