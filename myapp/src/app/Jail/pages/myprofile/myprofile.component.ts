import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface jailFetch {
  jail_id: any,
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

  jaildata!: jailFetch;
  jid :any
 

  ngOnInit() {
   
    this.jailFetch();
  }

  jailFetch() {

    if (typeof sessionStorage !== 'undefined') {

      this.jid = sessionStorage.getItem('jid');// Access sessionStorage here
      
  }


    axios.get(`http://localhost:5000/myprofile/${this.jid}` ).then((response) => {
      console.log(response.data.jail)
     
     this.jaildata = response?.data?.jail[0]



   })
  }
}

// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { Component, Inject, PLATFORM_ID } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import axios from 'axios';

// interface UserFetch {
//   loc_id: any,
//   user_name: any,
//   user_contact: any,
//   user_email: any,
//   user_gender: any,
//   user_password: any,
//   user_address: any,
//   user_photo: any;
//   user_id: any

// }





// @Component({
//   selector: 'app-myprofile',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './myprofile.component.html',
//   styleUrl: './myprofile.component.css'
// })
// export class MyprofileComponent {

//   userdata!: UserFetch;
//   uid:any 
  

//   // user_name: any;
  
 

//   ngOnInit() {
    
//     this.UserFetchdata();
    
//   }
//   UserFetchdata() {

//     if (typeof sessionStorage !== 'undefined') {

//       this.uid = sessionStorage.getItem('uid');// Access sessionStorage here
      
//   }

  
//     axios.get(`http://localhost:5000/userregistration/${this.uid}`,).then((response) => {
//       console.log(response.data.user[0])

//       this.userdata = response?.data?.user[0]



//     })
//   }


// }
