import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isProfileClicked=false;

  constructor(private sharedService:SharedService,private route:Router){
    // console.log(sharedService.hi)
    this.profileDetails=this.sharedService?.getUserDetails();
    this.profileDetails={email:'mn'}
  }
  ProfileLetter:any;
  profileDetails:any;

  foodItemstoOrder=[
    {name:"Biryani",value:"biryani",assetImg:"assets/images/biryani.png"},
    {name:"Pizza",value:"pizza",assetImg:"assets/images/pizza.png"},
    {name:"Icecream",value:"icecream",assetImg:'assets/images/icecream.png'},
    {name:"Noodles",value:"noodles",assetImg:'assets/images/noodles.png'},
    {name:"Tiffins",value:"tiffins",assetImg:'assets/images/all-in-one-tiffin.jpg'},
    // {name:"Biryani",value:"",assetImg:'assets/images/biryani.png'},
    // {name:"Pizza",value:"",assetImg:'assets/images/pizza.png'},
    // {name:"Icecream",value:"",assetImg:'assets/images/icecream.png'},
    // {name:"Noodles",value:"",assetImg:'assets/images/noodles.png'},
  ]

  // assets/images/biryani.png


  ngOnInit(): void {
    this.ProfileLetter=this.profileDetails.email[0].toUpperCase()
    console.log(this.profileDetails)
    console.log(this.ProfileLetter)

  }

  showMoreItems(itemName:string){
    console.log(itemName);
    this.route.navigate(['/foods',itemName])
    


  }



}
