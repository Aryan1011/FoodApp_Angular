import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token:string):void{
    localStorage.setItem('token',token);
  }

  getToken():string|null{
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken()!=null;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

   hashString(str: string): string {
    let hash = 2166136261;
    for (let i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i);
      hash *= 16777619;
    }
    return hash.toString();
  }


  login({email, password}:any):Observable<any>{
    const hashedPassword = this.hashString(password);
    if(email==='aryan@gmail.com' &&   hashedPassword == "-21451830601490570"  ){
      this.setToken(hashedPassword);
      return of({name:'Aryan',email:'aryan@gmail.com'});
    }
    return throwError(new Error('Failed to Login'));
  }
}
