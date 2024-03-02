import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import axios from 'axios';

interface fetchcategory {
  
  category_name: any,
  category_id: any
}

interface fetchproduct {
  product_name: any,
  product_details: any,
  product_photo: any,
  product_rate: any,
  product_id: any
}

@Component({
  selector: 'app-viewproduct',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  categorydata: fetchcategory[] = [];
  productdata: fetchproduct[] = [];
  jailId:any


ngOnInit() {
  this.fetchcategory();
  this.route.queryParams.subscribe(params => {
    this.jailId= params['jail_id']; // Access the 'msg' parameter
    console.log(this.jailId);
    
    // Use the 'msg' value here
  });
  this.fetchproduct() 
}
fetchcategory() {
  axios.get('http://localhost:5000/category/').then((response) => {
    // console.log(response.data.fetchcategory)
    this.categorydata = response.data.category
  })
}
fetchproduct() {
  axios.get('http://localhost:5000/fetchproduct/'+this.jailId).then((response) => {
    // console.log(response.data.product);
    this.productdata = response.data.product
  })
}

productfetchdataById(event:any) {
  const selectedproductId = event.target.value;

  axios.get(`http://localhost:5000/productfetchdataById/${selectedproductId}/${this.jailId}`).then((response) => {
    console.log(response.data)

    this.productdata = response.data.productdatabyId
    


  })
}

}
