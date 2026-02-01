import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  wrongCreds=false;
  constructor(private router:Router,private sharedService:SharedService){}
  myForm=new FormGroup({
    email:new FormControl('',[Validators.required]), //,Validators.email
    password:new FormControl('',Validators.required) 
  })
  
  persons=[
    { email:'mn',password:'m' },
    { email:'mallika123@gmail.com',password:'mallika123' },
    { email:'supraja123@gmail.com',password:'supraja123' },
    { email:'narendra123@gmail.com',password:'narendra123' }
  ]



  onSubmit(){
    console.log(this.myForm.value)
    let email=this.myForm.value.email;
    let password=this.myForm.value.password;

    for(let item of this.persons){
      console.log(item)
      if(item.email===email && item.password===password){
        this.wrongCreds=false;
        this.sharedService.setUserDetails(item)
        this.router.navigate(['/home']);

      }
      else{
        this.wrongCreds=true;

      }
      

    }
   


  }


}
