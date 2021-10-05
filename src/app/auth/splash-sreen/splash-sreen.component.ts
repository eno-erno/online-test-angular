import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-sreen',
  templateUrl: './splash-sreen.component.html',
  styleUrls: ['./splash-sreen.component.css']
})
export class SplashSreenComponent implements OnInit {
  
  isLogin : boolean = false;
  isLogout : boolean = false;

  constructor(private router : Router) {
    const auth = localStorage.getItem('users');
    if(auth){
      this.isLogin = false;
      this.isLogout = true;
      this.router.navigate(['/post']);
    }else{
      this.isLogin = true;
      this.isLogout = false;
      this.router.navigate(['/']);
    }
   }

  ngOnInit(): void {
  }

}
