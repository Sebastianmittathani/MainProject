import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface categoryinterface {
  categoryname: any;
  jail_id:any;
}

interface categoryfetch {
  category_name: any,
  category_id: any
}
@Component({
  selector: 'app-productcategory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './productcategory.component.html',
  styleUrl: './productcategory.component.css'
})
export class ProductcategoryComponent {
  categoryForm = new FormGroup(
    {
      category: new FormControl(''),
    }
  );
  var: any = ''
  data: categoryfetch[] = [];
  check: number = 0
  jid:any

  onSubmit() {
    console.log(this, this.categoryForm.value.category)
    const categorydata: categoryinterface = {
      categoryname: this.categoryForm.value.category,
      jail_id:sessionStorage.getItem("jid"),
    };

    if (this.check === 0) {

      axios.post('http://localhost:5000/category/', categorydata).then((response) => {
        console.log(response.data);
        alert(response.data.message)
        this.fetchcategory();
        this.categoryForm.reset();
      })
    }
    else {
      axios.patch(`http://localhost:5000/category/${this.check}`, categorydata).then((response) => {
        // console.log(response.data);
        alert(response.data.message)
        this.fetchcategory();
        this.categoryForm.reset();
        this.check = 0
      })
    }
   
  }

  updatecatgory(index: number): any {
    console.log(index);
    
    axios.get(`http://localhost:5000/updatecatgory/${index}`).then((response) => {
      console.log(response.data.category)
      this.categoryForm.get('category')?.setValue(response.data.category[0].category_name);
      this.check = index

    })

  }
  ngOnInit() {
    this.fetchcategory();
  }
  fetchcategory() {
    if (typeof sessionStorage !== 'undefined') {

      this.jid = sessionStorage.getItem('jid');// Access sessionStorage here
      
  }
    axios.get(`http://localhost:5000/category/${this.jid}`).then((response) => {
      this.data = response.data.jcategory
      console.log(response.data.jcategory);
      
    })

  }
  deleteRow(index: number): void {
    axios.delete(`http://localhost:5000/category/${index}`).then((response) => {
      console.log(response.data);
      this.fetchcategory();
    })
  }

}
function updatecategory(index: any, number: any) {
  throw new Error('Function not implemented.');
}

