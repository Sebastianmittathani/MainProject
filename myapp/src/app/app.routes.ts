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
import { EditprofileComponent } from './Jail/pages/editprofile/editprofile.component';
import { ChangepasswordComponent } from './Jail/pages/changepassword/changepassword.component';
import { ShopmyProfileComponent } from './Shop/pages/shopmy-profile/shopmy-profile.component';
import { ShopeditProfileComponent } from './Shop/pages/shopedit-profile/shopedit-profile.component';
import { ShopchangepassComponent } from './Shop/pages/shopchangepass/shopchangepass.component';
import { BuyproductComponent } from './Shop/pages/buyproduct/buyproduct.component';
import { ViewbookingComponent } from './Jail/pages/viewbooking/viewbooking.component';
import { MybookingComponent } from './Shop/pages/mybooking/mybooking.component';
import { PaymentComponent } from './Shop/pages/payment/payment.component';
import { PostcomplaintComponent } from './Shop/pages/postcomplaint/postcomplaint.component';
import { ViewcomplaintComponent } from './Jail/pages/viewcomplaint/viewcomplaint.component';
import { PostfeedbackComponent } from './Shop/pages/postfeedback/postfeedback.component';
import { ViewfeedbackComponent } from './Jail/pages/viewfeedback/viewfeedback.component';
import { ViewcomplaintandreplyComponent } from './Admin/Pages/viewcomplaintandreply/viewcomplaintandreply.component';
import { CompreplyComponent } from './Shop/pages/compreply/compreply.component';


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
                path: 'shopmyProfile',
                component: ShopmyProfileComponent,
            },
            {
                path: 'shopeditProfile',
                component: ShopeditProfileComponent,
            },
            {
                path: 'shopchangepass',
                component: ShopchangepassComponent,
            },
              {
                path: 'compreply',
                component:CompreplyComponent,
            },
            {
                path: 'viewjail',
                component: ViewjailComponent,
            },
            {
                path: 'viewproduct',
                component: ViewproductComponent,
            },
            {
                path: 'buyproduct',
                component: BuyproductComponent,
            },
            {
                path: 'mybooking',
                component: MybookingComponent,
            },
            {
                path: 'payment',
                component:PaymentComponent,
            },
            {
                path: 'postcomplaint',
                component:PostcomplaintComponent,
            },
            {
                path: 'postfeedback',
                component:PostfeedbackComponent,
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
                path: 'editprofile',
                component: EditprofileComponent,
            },
            {
                path: 'changepassword',
                component: ChangepasswordComponent,
            },
            {
                path: 'prisioner',
                component: PrisonerComponent,
            },
            {
                path: 'viewbooking',
                component: ViewbookingComponent,
            },
            {
                path: 'viewcomplaint',
                component: ViewcomplaintComponent,
            },
            {
                path: 'viewfeedback',
                component:ViewfeedbackComponent ,
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
            {
                path: 'viewcomplaintandreply',
                component: ViewcomplaintandreplyComponent,
            },



        ]
    },

];


