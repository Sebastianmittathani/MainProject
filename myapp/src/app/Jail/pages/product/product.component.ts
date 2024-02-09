import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface productInterface {
  productName: any;
  // product_photo: any;
  // product_rate: any;
  // product_description: any;
  // product_id: any;
}

// interface productfetch {
//   product_name: any,
//   product_id: any

// }

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // data: productInterface[] = []

  // ngOnInit() {
  //   this.productInterface();
  // }
  // fetchproduct() {
  //   axios.get.('http://localhost:5000/Product').then((response) => {
  //     this.data = response.data.district
      
  //   })
  // }

  profileForm = new FormGroup(
    {
      product: new FormControl(''),
    }
  );

var: any = ''
onSubmit() {
  console.log(this.profileForm.value.product);
  const productdata: productInterface = {
    productName: this.profileForm.value.product,
    // product_photo: this.profileForm.value.product,
    // product_rate: this.profileForm.value.product,
    // product_description: this.profileForm.value.product,
    // product_id: this.profileForm.value.product,
    
  };
  axios.post('http://localhost:5000/product/',productdata).then((response) => {
    console.log(response.data);
})
  }
  }
