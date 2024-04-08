import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface productInterface {
  product_name: any;
  product_photo: any;
  product_rate: any;
  product_details: any;
  category_id: any;
  jail_id: any;
}
interface categoryfetch {
  category_id: any,
  category_name: any
}

// interface jailfetch{
//   jail_id: any,
//   jail_name: any,
// }

interface productfetch {
  category_name: any,
  product_name: any,
  product_id: any
  product_photo: any,
  product_details: any,
  product_rate: any,
  jail_name: any

}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  filedata: any

  productdata: productfetch[] = [];
  catdata: categoryfetch[] = [];
  check: number = 0
  // jaildata:jailfetch[] = []


  productForm = new FormGroup(
    {
      product_name: new FormControl(''),
      category_id: new FormControl(''),
      product_details: new FormControl(''),
      product_photo: new FormControl(''),
      product_rate: new FormControl(''),
      jail_id: new FormControl(''),


    }
  );

  var: any = ''
  productfetch: any;

  handleFile(event: any) {
    this.filedata = event.target.files[0]

  }
  onSubmit() {
    console.log(this.productForm.value);
    const productdata: productInterface = {
      product_name: this.productForm.value.product_name,
      product_photo: this.productForm.value.product_photo,
      product_rate: this.productForm.value.product_rate,
      product_details: this.productForm.value.product_details,
      category_id: this.productForm.value.category_id,
      jail_id: sessionStorage.getItem("jid")


    };

    const userformdata = new FormData();


    userformdata.append('product_photo', this.filedata);
    userformdata.append('product_name', productdata.product_name);
    userformdata.append('product_rate', productdata.product_rate);
    userformdata.append('product_details', productdata.product_details);
    userformdata.append('category_id', productdata.category_id);
    userformdata.append('jail_id', productdata.jail_id);
    
    


    if (this.check === 0) {
      axios.post('http://localhost:5000/Product/', userformdata).then((response) => {
        console.log(response.data);
        this.fetchproduct();
      })
    }
    else {
      axios.patch(`http://localhost:5000/Product/${this.check}`, productdata).then((response) => {
        // console.log(response.data);
        alert(response.data.message)
        this.productfetch();
        this.productForm.reset();
        this.check = 0
      })
    }
  }
  updateproduct(index: number): any {
    console.log(index);
    axios.get(`http://localhost:5000/updateproduct/${index}`).then((response) => {


      // console.log(response.data.place[0].place_name)


      this.productForm.get('product_name')?.setValue(response.data.product[0].product_name);
      this.productForm.get('product_details')?.setValue(response.data.product[0].product_details);
      this.productForm.get('product_rate')?.setValue(response.data.product[0].product_rate);

      this.productForm.get('category_id')?.setValue(response.data.product[0].category_id);
      this.check = index

    })

  }
    ngOnInit() {
      this.fetchcategory();
      this.fetchproduct();

    }
    fetchcategory() {
      axios.get('http://localhost:5000/category').then((response) => {
        // console.log(response.data.category);  
        this.catdata = response.data.category
      })
    }
    fetchproduct() {
      axios.get('http://localhost:5000/Product').then((response) => {
        // console.log(response.data.productdata);

        this.productdata = response.data.product

      })
    }
    deleteRow(index: number): void {
      // Remove the item at the specified index from the 'data' array
      axios.delete(`http://localhost:5000/Product/${index}`).then((response) => {
        // console.log(response.data);
        this.fetchproduct();
      })
    }

  }
