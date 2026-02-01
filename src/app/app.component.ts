import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  profileDetails;
  ProfileLetter='';
  title = 'QuickBite';
  cartCount:number=0
  profileOptions=[{name:"Home",value:"home"},
    {name:"Orders",value:"orders"},
    {name:"Cart",value:"cart"},
    {name:"Favourites",value:"favourites"},
    {name:"Address",value:"address"},

  ]
  constructor(private sharedService:SharedService,public dataService:DataService,private route:Router){
    this.profileDetails=this.sharedService?.getUserDetails();
    this.profileDetails={email:'mn'}
  }

  ngOnInit(){
    this.ProfileLetter=this.profileDetails.email[0].toUpperCase()
  }

  checkCartCount(){
    this.cartCount=this.dataService.totalCartCount;
    return this.cartCount>0
  }
  openCart(){
    this.route.navigate(['/cart'])
  }
  goToMenu(menu:string){
    console.log("Hi")
    this.route.navigate(['/'+menu])

  }

}
