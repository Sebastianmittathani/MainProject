import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface SubcategoryInterface {
  subcategoryName: any;

}




@Component({
  selector: 'app-subcategory',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.css'
})


export class SubcategoryComponent {
  profileForm = new FormGroup(
    {
      subcategory: new FormControl(''),
    
    }
  );
  var: any = ''
  onSubmit() {
    // console.log(this.profileForm.value.district);
    // console.log(this.profileForm.value.place);
    const subcategorydata : SubcategoryInterface ={
      subcategoryName: this.profileForm.value.subcategory,


}

   axios.post('http://localhost:5000/addSubcategory/',subcategorydata).then((response) => {
    console.log(response.data);
  })
}

}
