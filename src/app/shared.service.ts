import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  hi="mallika"
  userDetails:any;

  constructor() { }
  
  setUserDetails(details:any){
    this.userDetails=details
  }

  getUserDetails(){
    return this.userDetails;
  }

  


  
}
