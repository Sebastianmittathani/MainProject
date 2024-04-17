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

    if (!this.changeForm.valid) {
      alert('Fill all the input fields');
      return;
    }

    const password = this.changeForm.value.curshop_password;
    if (!password) {
      alert('Password is required.');
      return;
    }
    const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    const isPasswordValid = passwordRegex.test(password);

    if (!isPasswordValid) {
      alert(
        'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
      return;
    }

    const newpassword = this.changeForm.value.newshop_password;
    if (!newpassword) {
      alert('Password is required.');
      return;
    }
    const newpasswordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    const isnewPasswordValid = newpasswordRegex.test(newpassword);

    if (!isnewPasswordValid) {
      alert(
        'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
      return;
    }

    const repassword = this.changeForm.value.reshop_password;
    if (!repassword) {
      alert('Password is required.');
      return;
    }
    const repasswordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    const isrePasswordValid = repasswordRegex.test(repassword);

    if (!isrePasswordValid) {
      alert(
        'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
      return;
    }

    const Formdata: ChangeShopPass = {
      newshop_password: this.changeForm.value.newshop_password,
    };
    console.log(this.changeForm.value.newshop_password);


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
        console.log('error in matching newpass');
        alert('error in matching newpass')
        return
       

      }
    }
    else {
      console.log('error not curpass');
      alert('not current password ')
      return
    }
    

  }
  ngOnInit() {
    this.GetShoppassword();
  }
  
  GetShoppassword() {
  
  
    if (typeof sessionStorage !== 'undefined') {
      this.sid = sessionStorage.getItem('sid');
    }
  
    axios.get(`http://localhost:5000/getshop/${this.sid}`).then((response) => {
      console.log(response.data.shop[0].shop_password);
      
      this.shop_password = response.data.shop[0].shop_password;
    })
  
  }

}

