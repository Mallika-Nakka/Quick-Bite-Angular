import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit,OnDestroy {
  cartItemDetails:any[]=[];
  subscription:Subscription


  constructor(private dataService:DataService,private router:Router){
    dataService.setCartItems([]);
    this.subscription=this.dataService.foodItemsInCart$.subscribe(items=>{
      this.cartItemDetails=items;
    })
    console.log(this.cartItemDetails)

    // this.cartItemDetails=dataService.foodItemsInCart;
  }
  ngOnInit(): void {
    

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  decreaseCount(item:any){
   item.count-=1
  // this.dataService.getTheCartCount();
  console.log(item);
  this.dataService.removeItemFromCart(item)
  
   }

  increaseCount(item:any){
    item.count+=1
    // this.dataService.getTheCartCount();
  console.log(item);

  }

  goHome(){
    this.router.navigate(['/home'])

  }

getPriceDetails(item:any){
  return item.count*item.price;

}

}
