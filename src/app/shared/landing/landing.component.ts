import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import * as $ from "jquery";
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
     this.a;
  }

  a=function change() {
    var words=[
      "Hungry?",
      "Late night at office?",
      "Cooking gone wrong?",
      "Unexpected guests?",
      "Game Night?",
      "Movie Marathon?"
    ]
    let i=0;
    setInterval(function(){
      $('#words').fadeOut(function(){
        $(this).html(words[(i=(i+1)%words.length)]).fadeIn();
      });
    },1500)
  }();

}
