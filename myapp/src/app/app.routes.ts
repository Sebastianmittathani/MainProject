import { Routes } from '@angular/router';
import { DistrictComponent } from './Admin/district/district.component';
import { NavComponent } from './Admin/nav/nav.component';
import { HomeComponent } from './Admin/home/home.component';
import { PlaceComponent } from './Admin/place/place.component';
import { BrandComponent } from './Admin/brand/brand.component';
import { CategoryComponent } from './Admin/category/category.component';
import { SubcategoryComponent } from './Admin/subcategory/subcategory.component';
import { OnInitComponent } from './Admin/on-init/on-init.component';


export const routes: Routes = [
    {
        path: 'Admin',
        component: NavComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            },
            {
                path:'district',
                component:DistrictComponent
            },
            {
                path:'place',
                component:PlaceComponent
            },
            {
                path:'brand',
                component:BrandComponent
            },
            {
                path:'category',
                component:CategoryComponent
            },
            {
                path:'subcategory',
                component:SubcategoryComponent
            },
            {
                path:'onInit',
                component:OnInitComponent
            }
      
        ]
    },
    
];
