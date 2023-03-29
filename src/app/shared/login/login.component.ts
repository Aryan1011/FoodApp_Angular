import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:any;
  regex:string="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"


  constructor(fb:FormBuilder) { 
    this.form= fb.group({
      email:['',[
        Validators.required,
        Validators.pattern(this.regex)
      ]],
      password:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
   
  }
  get fc(){
    return this.form.controls;
   }

   onSubmit(){
    console.log(this.form.value);
   }
}
