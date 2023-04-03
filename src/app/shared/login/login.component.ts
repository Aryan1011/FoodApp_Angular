import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:any;
  regex:string="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"


  constructor(fb:FormBuilder, private _authService:AuthService, private router:Router, private _userService:UserService) { 
    this.form= fb.group({
      email:['',[
        Validators.required,
        Validators.pattern(this.regex)
      ]],
      password:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
   if(this._authService.isLoggedIn()){
    this.router.navigate(['admin/manage-order']);
  }
  
  if(this._userService.isCustomerLoggedIn()){
     this.router.navigate(['user/items']);
   }

  }
  get fc(){
    return this.form.controls;
   }

   onSubmit():void{
    this._authService.login(this.form.value).subscribe(
      (data)=>{
        this.router.navigate(['admin/manage-order']);
      },
      (err:Error)=>{
        alert(err.message);
      }
    )
   }


   customerLogin():void{
    this._userService.login(this.form.value).subscribe(
      (data)=>{
        if(data==null){
          alert("Login Failed");
        }
        else{
          console.log(data);
          this._userService.setCustomerId(data.customerId);
          this.router.navigate(['/user/items'])
        }
      }
    )
   }

}
