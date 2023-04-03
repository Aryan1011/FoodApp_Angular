import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {



  constructor(private router:Router, private _authService:AuthService,private _userService:UserService) { }

  ngOnInit(): void {
    if(this._authService.isLoggedIn()){
      this.router.navigate(['admin/manage-order']);
     }
     if(this._userService.isCustomerLoggedIn()){
      this.router.navigate(['user/items']);
     }
  }

}
