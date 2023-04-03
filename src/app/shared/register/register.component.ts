import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:any;
  regex:string="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  phoneRegex:string="[0-9+]$";
  constructor(fb:FormBuilder, private router:Router, private _authService:AuthService
    ,private _userService:UserService ) {
    this.form= fb.group({
      name:['',Validators.required],
      address:['',Validators.required],
      email:['',[
        Validators.required,
        Validators.pattern(this.regex)
      ]],
      phone:['',[Validators.required]],
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

   onSubmit(){
    this._userService.addCustomer(this.form.value)
    .subscribe(data=>{
      alert("User Registered");
      this.router.navigate(['/login']);
    })
   }
}
