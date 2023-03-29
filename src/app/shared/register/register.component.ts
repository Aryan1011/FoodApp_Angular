import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:any;
  regex:string="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  phoneRegex:string="[0-9+]$";
  constructor(fb:FormBuilder) {
    this.form= fb.group({
      name:['',Validators.required],
      address:['',Validators.required],
      email:['',[
        Validators.required,
        Validators.pattern(this.regex)
      ]],
      phone:['',[Validators.required,Validators.pattern(this.phoneRegex)]],
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
