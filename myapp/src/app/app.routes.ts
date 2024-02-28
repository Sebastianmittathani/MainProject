import { Routes } from '@angular/router';
import { DistrictComponent } from './Admin/Pages/district/district.component';
import { HomeComponent } from './Admin/Pages/home/home.component';
import { MainComponent } from './Admin/Component/main/main.component';
import { CentraljailComponent } from './Admin/Pages/centraljail/centraljail.component';
import { PlaceComponent } from './Admin/Pages/place/place.component';
import { PrisonerComponent } from './Jail/pages/prisoner/prisoner.component';
import { ProductComponent } from './Jail/pages/product/product.component';
import { LoginComponent } from './Guest/login/login.component';
import { RegisterComponent } from './Guest/register/register.component';
import { ShopmainComponent } from './Shop/component/shopmain/shopmain.component';
import { HomepageComponent } from './Shop/pages/homepage/homepage.component';
import { JailcomponentComponent } from './Jail/component/jailcomponent/jailcomponent.component';
import { MyprofileComponent } from './Jail/pages/myprofile/myprofile.component';
import { ProductcategoryComponent } from './Jail/pages/productcategory/productcategory.component';
import { ViewjailComponent } from './Shop/pages/viewjail/viewjail.component';
import { ViewproductComponent } from './Shop/pages/viewproduct/viewproduct.component';


export const routes: Routes = [
    {
        path: 'Shop',
        component: ShopmainComponent,
        children: [
            {
                path: 'home',
                component: HomepageComponent,
            },
            {
                path: 'viewjail',
                component: ViewjailComponent,
            },
            {
                path: 'viewproduct',
                component: ViewproductComponent,
            },
            

        ]
    },
    {
        path: 'Jail',
        component:JailcomponentComponent,
        children: [
            
            {
                path: 'category',
                component: ProductcategoryComponent,
            },
            {
                path: 'product',
                component: ProductComponent,
            },
            {
                path: 'myprofile',
                component: MyprofileComponent,

            },
            {
                path: 'prisioner',
                component: PrisonerComponent,
            },

        ]
    },
    {
        path: 'Guest',
        children: [
            {
                path: 'ShopRegister',
                component: RegisterComponent,
            },
            {
                path: 'Login',
                component: LoginComponent,
            },
        ]
    },
    {
        path: 'Admin',
        component: MainComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'District',
                component: DistrictComponent,
            },
            {
                path: 'CentralJail',
                component: CentraljailComponent,
            },
            {
                path: 'Place',
                component: PlaceComponent,
            },



        ]
    },

];


