import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-district',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent {
  profileForm = new FormGroup(
    {
      district: new FormControl(''),
      place: new FormControl(''),
    }
  );
  var: any = ''
  onSubmit() {
    console.log(this.profileForm.value.district);
    console.log(this.profileForm.value.place);
    this.var = this.profileForm.value.district;

  }

}
