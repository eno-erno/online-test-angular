import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin : boolean = false;
  isLogout : boolean = false;
  userData : any;
  getUser : any;

  constructor(private router : Router) { 
    const auth = localStorage.getItem('users');
    if(auth){
      this.isLogin = false;
      this.isLogout = true;
      this.userData = auth;
      // this.router.navigate(['/post']);
    }else{
      this.isLogin = true;
      this.isLogout = false;
      this.userData = '';
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {
     this.getUser = JSON.parse(this.userData) ; 
  }
  logout(){
    localStorage.removeItem("users"); 
    this.router.navigate(['/login']);
  }

}
