import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private foodItemsInCart=new BehaviorSubject<any[]>([])
  foodItemsInCart$=this.foodItemsInCart.asObservable();
  cartFoodItems:any[]=[];
  setCartItems(items:any[]){
    // items.push(this.InitialFoodItemsInCart)
    items.push(...this.cartFoodItems)
    this.foodItemsInCart.next(items)
  }
  
  InitialFoodItemsInCart=
    { url:'/assets/images/biryani.png',
        name:"Vegetable Biryani",
      price: 140,
      rating:'4.5',
      timing:'20-25 minutes',
      count:2,
      description:'Serves 1- A delicious item and makes every one mouth and stomach full',
      type:'veg'
    }
    
  ;


  constructor() { }
  // foodItemsDetails={
  //   biryani:{
  //     veg:[
  //     { url:'/assets/images/biryani.png',
  //       name:"Vegetable Biryani",
  //     price: 140,
  //     rating:'4.5',
  //     timing:'20-25 minutes',
  //     count:0,
  //     type:'veg'
  //   },
  //     { url:'/assets/images/biryani.png',
  //       name:"Paneer Biryani",
  //     price: 240,
  //     rating:'4.5',
  //     timing:'30-35 minutes',
  //     count:0,
  //     type:'veg'

  //   },
  //   { url:'/assets/images/biryani.png',
  //       name:"Kaju Biryani",
  //     price: 140,
  //     rating:'4.5',
  //     timing:'15-25 minutes',
  //     count:0,
  //     type:'veg'
    
  //   },
  //     { url:'/assets/images/biryani.png',
  //       name:"Mushroom Biryani",
  //     price: 240,
  //     rating:'4.5',
  //     timing:'40-45 minutes',
  //     count:0,
  //     type:'nonveg'
  //   }
  //   ],
      
  //     nonveg:[
  //     { url:'/assets/images/biryani.png',
  //       name:"Chicken Biryani",
  //     price: 140,
  //     rating:'4.5',
  //   count:0,
  //     type:'nonveg'},
  //     { url:'/assets/images/biryani.png',
  //       name:"Chicken Fry Piece Biryani",
  //     price: 240,
  //     rating:'4.5',
  //   count:0,
  //     type:'nonveg'},
  //     { url:'/assets/images/biryani.png',
  //       name:"Chicken Biryani",
  //     price: 140,
  //     rating:'4.5',
  //   count:0,
  //     type:'nonveg'},
  //     { url:'/assets/images/biryani.png',
  //       name:"Chicken Fry Piece Biryani",
  //     price: 240,
  //     rating:'4.5',
  //   count:0,
  //     type:'veg'},
  //     { url:'/assets/images/biryani.png',
  //       name:"Chicken Biryani",
  //     price: 140,
  //     rating:'4.5',
  //   count:0,
  //     type:'nonveg'},
  //     { url:'/assets/images/biryani.png',
  //       name:"Chicken Fry Piece Biryani",
  //     price: 240,
  //     rating:'4.5',
  //   count:0,
  //     type:'nonveg'}
  //   ]
  
  // }  
  // }

    foodItemsDetails={
    biryani:[
      { url:'/assets/images/biryani.png',
        name:"Vegetable Biryani",
      price: 140,
      rating:'4.5',
      timing:'20-25 minutes',
      count:0,
      type:'veg'
    },
      { url:'/assets/images/biryani.png',
        name:"Paneer Biryani",
      price: 240,
      rating:'4.5',
      timing:'30-35 minutes',
      count:0,
      type:'veg'

    },
    { url:'/assets/images/biryani.png',
        name:"Kaju Biryani",
      price: 140,
      rating:'4.5',
      timing:'15-25 minutes',
      count:0,
      type:'veg'
    
    },
      { url:'/assets/images/biryani.png',
        name:"Mushroom Biryani",
      price: 240,
      rating:'4.5',
      timing:'40-45 minutes',
      count:0,
      type:'veg'
    },
      { url:'/assets/images/biryani.png',
        name:"Chicken Biryani",
      price: 140,
      rating:'4.5',
    count:0,
      type:'nonveg'},
      { url:'/assets/images/biryani.png',
        name:"Chicken Fry Piece Biryani",
      price: 240,
      rating:'4.5',
    count:0,
      type:'nonveg'},
      { url:'/assets/images/biryani.png',
        name:"Chicken Biryani",
      price: 140,
      rating:'4.5',
    count:0,
      type:'nonveg'},
      { url:'/assets/images/biryani.png',
        name:"Chicken Fry Piece Biryani",
      price: 240,
      rating:'4.5',
    count:0,
      type:'nonveg'},
      { url:'/assets/images/biryani.png',
        name:"Chicken Biryani",
      price: 140,
      rating:'4.5',
    count:0,
      type:'nonveg'},
      { url:'/assets/images/biryani.png',
        name:"Chicken Fry Piece Biryani",
      price: 240,
      rating:'4.5',
    count:0,
      type:'nonveg'}
    ],
      
    
    tiffins:[
      { url:'/assets/images/autnentic-idli-sambar.jpg',
        name:"Authentic Idli Sambar",
      price: 70,
      rating:'4.5',
      timing:'20-25 minutes',
      count:0,
      type:'tiffin'
    },
      { url:'/assets/images/roll-dosa.jpg',
        name:"Roll Dosa",
      price: 50,
      rating:'4.5',
      timing:'30-35 minutes',
      count:0,
      type:'tiffin'

    },
    { url:'/assets/images/special-vada.jpg',
        name:"Special Vada",
      price: 140,
      rating:'4.5',
      timing:'15-25 minutes',
      count:0,
      type:'tiffin'
    
    },
      { url:'/assets/images/uggani-bujji.jpg',
        name:"Uggani Bajji",
      price: 240,
      rating:'4.5',
      timing:'40-45 minutes',
      count:0,
      type:'tiffin'
    },
      { url:'/assets/images/uggani.jpg',
        name:"Uggani",
      price: 140,
      rating:'4.5',
    count:0,
      type:'tiffin'},
      { url:'/assets/images/upma.jpg',
        name:"Upma",
      price: 240,
      rating:'4.5',
    count:0,
      type:'tiffin'},
      { url:'/assets/images/utappam.jpg',
        name:"Utappam",
      price: 140,
      rating:'4.5',
    count:0,
      type:'tiffin'},
      { url:'/assets/images/vada-chutni.jpg',
        name:"Vada Chutni",
      price: 240,
      rating:'4.5',
    count:0,
      type:'tiffin'},
      { url:'/assets/images/vegetable-dosa.jpg',
        name:"Vegetable Dosa",
      price: 140,
      rating:'4.5',
    count:0,
      type:'tiffin'},
      { url:'/assets/images/ghee-idli.jpg',
        name:"Ghee Idli",
      price: 240,
      rating:'4.5',
    count:0,
      type:'tiffin'}
    ],
  }

  getBiryaniDetails(){
    return this.foodItemsDetails;
  }

  totalCartCount:number=0
  getTheCartCountAndItems(){
    this.totalCartCount=0
    type CategoryKey = keyof typeof this.foodItemsDetails;

    for(let item in this.foodItemsDetails){
      const category=item as CategoryKey;
      let foodItems=this.foodItemsDetails[category]

      for(let foodItem of foodItems){
        console.log(foodItem);
        this.totalCartCount+=foodItem.count;
        if(foodItem.count>0){
          !this.cartFoodItems.includes(foodItem) ? this.cartFoodItems.push(foodItem) : '';          
        }
      }
    }
  }

  addFoodItemsToCart(item:any){
    
  }

  removeItemFromCart(item:any){
    item.count>0? this.totalCartCount-=1:'';
   if(item.count===0){
     const currentItems=this.foodItemsInCart.getValue();
    const updatedItems=currentItems.filter(cartItem=> cartItem!=item);
    this.foodItemsInCart.next(updatedItems);
   }
   
  }

}
