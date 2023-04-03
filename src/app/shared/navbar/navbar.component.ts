import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router, private _authService:AuthService
    ,private _userService:UserService) {
      this.customerId=this._userService.getCustomerId();
     }

  isAdmin:boolean=false;
  customerId:any;


  ngOnInit(): void {
    if(this._authService.isLoggedIn()){
      this.router.navigate(['admin/manage-order']);
      this.isAdmin=true;
     }
     
  }
  logoutAdmin():void{
    this.auth.logout();
  }

  logoutUser():void{
    this._userService.logoutCustomer();
    localStorage.getItem('customerId')
  }

}
