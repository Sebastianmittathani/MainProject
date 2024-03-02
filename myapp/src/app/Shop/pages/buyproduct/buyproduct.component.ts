import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import axios from 'axios';

interface bookproduct{
  product_name: any,
  product_details: any,
  product_photo: any,
  product_rate: any
}

@Component({
  selector: 'app-buyproduct',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './buyproduct.component.html',
  styleUrl: './buyproduct.component.css'
})
export class BuyproductComponent {
  constructor(private route: ActivatedRoute) {}

  productdata: bookproduct[] = [];
   productId:any
  


  ngOnInit() {

    this.bookproduct() ;
    this.route.queryParams.subscribe(params => {
      this.productId= params['product_id']; // Access the 'msg' parameter
      console.log(this.productId);
      
      // Use the 'msg' value here
    });
  }
  
  bookproduct() {
    axios.get('http://localhost:5000/bookproduct/'+this.productId).then((response) => {
      // console.log(response.data.product[0]);
      this.productdata = response.data.product[0]
    })
  }

}
