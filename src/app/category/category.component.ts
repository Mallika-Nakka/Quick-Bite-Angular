import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  // vegNonVegTypes=['biryani','pizza','snacks','noodles']
  // normalTypes=['icecream','tiffins']
  foodItems:any;
  foodCategory:any
  selectedCategory:any;
  name="";
  itemDetails:any;
  cartCount=0;
  // isVegNonvegType:boolean
  constructor(private route:ActivatedRoute,private cdrf:ChangeDetectorRef,private dataService:DataService,private router:Router){
     this.route.paramMap.subscribe(params=>{
      this.name=params.get('item') ??""; //params.get('item') returns string | null.
    //  Using ?? '' ensures this.name is always a string, defaulting to an empty string if null is returned.
     console.log(this.name)
     this.updateMenuBasedOnItem(this.name)
    })
    this.itemDetails=this.dataService.getBiryaniDetails();    
    this.foodItems=this.itemDetails[this.name];
    // this.isVegNonvegType = 
  }


  ngOnInit(): void {
   
  }

  updateMenuBasedOnItem(item:string){
    if(item=='biryani'){
      this.foodCategory=[{name:"Non Veg",value:'nonveg'},{name:"Veg",value:'veg'}]
      this.selectedCategory='nonveg'
      this.cdrf.detectChanges()
    }
  }
  onCategoryChange(){
  //  this.foodItems= this.selectedCategory=='veg' ? this.itemDetails.biryani.veg : this.itemDetails.biryani.nonveg
  //  this.cdrf.detectChanges()

   }


decreaseCount(item:any){
  item.count-=1
  this.dataService.getTheCartCountAndItems()
}

increaseCount(item:any){
    item.count+=1
    this.dataService.getTheCartCountAndItems()

}
  checkCartCount(){
    this.cartCount=this.dataService.totalCartCount;
    return this.cartCount>0
  }
  openCart(){
    const cartItems=this.dataService.foodItemsDetails
    this.dataService.setCartItems([])
    this.router.navigate(['/cart'])
  }
  
}
