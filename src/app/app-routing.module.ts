import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AdressComponent } from './adress/adress.component';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  // {path:'',component:LoginComponent},
  
  {path:'home',component: HomeComponent,
    children:[
      {path:'menu',component:CartComponent}
    ]
   },
  {path:'orders',component: OrdersComponent },
  {path:'cart',component: CartComponent },
  {path:'favourites',component: FavouritesComponent },
  {path:'address',component: AdressComponent },
  {path:'foods/:item',component:CategoryComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'} //default route
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
