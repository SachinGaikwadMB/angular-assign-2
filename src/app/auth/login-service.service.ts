import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 isLoggedIn = false;
  constructor(
    private http : HttpClient,
    private router :Router
  ) { }

  /*Method to get login details*/
  getLoginDetails(userEmail:any, userPass : any) {
    this.http.get<any>('http://localhost:3000/login ').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.email === userEmail && a.password === userPass;
        });
        if (user) {
          alert("login success")
          this.isLoggedIn = true;
          console.log('Inside service :', this.isLoggedIn);
          this.router.navigate(['product']);
        } else {
         this.router.navigate(['unauthorized']);
        }
      },
      (err) => {
       alert('Something went wrong !!!');
      }
    );
  }

  authenticateUser() {
    return this.isLoggedIn;
  }
}
