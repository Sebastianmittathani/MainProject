import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface ChangejailPass {
  newuser_password: any

}

@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent {
  jid: any;

  changeForm = new FormGroup({
    curuser_password: new FormControl(''),
    newuser_password: new FormControl(''),
    reuser_password: new FormControl(''),

  });
  curuser_password: any;
  userpassword: any;
  reuser_password: any;
  newuser_password: any;

  onSubmit() {
    if (!this.changeForm.valid) {
      alert('Fill all the input fields');
      return;
    }

    const password = this.changeForm.value.curuser_password;
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

    const newpassword = this.changeForm.value.newuser_password;
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

    const repassword = this.changeForm.value.reuser_password;
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

    const Formdata: ChangejailPass = {
      newuser_password: this.changeForm.value.newuser_password,
    };
    console.log(this.changeForm.value);

    if (this.changeForm.value.curuser_password == this.userpassword) {

      if (this.changeForm.value.reuser_password == this.changeForm.value.newuser_password) {


        axios.patch(`http://localhost:5000/changepass/${this.jid}`, FormData)
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
    this.Getpassword();
  }

  Getpassword() {


    if (typeof sessionStorage !== 'undefined') {
      this.jid = sessionStorage.getItem('jid');
    }

    axios.get(`http://localhost:5000/getjail/${this.jid}`).then((response) => {
      console.log(response.data.user[0].jail_password)
      this.userpassword = response.data.user[0].jail_password;
    })

  }
}





