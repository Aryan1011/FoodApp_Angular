import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  form:any;
  regex:string="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"


  constructor(fb:FormBuilder, private _authService:AuthService, private router:Router) { 
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


}
