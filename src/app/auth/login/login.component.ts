import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataUsers : any;
  showNav : boolean = false;
  formValue !: FormGroup;
  alertError : boolean = false;
  message : any = '';
  usersData = {};
  isLogin : boolean = false;
  isLogout : boolean = false;

  constructor(private formBuilder : FormBuilder,private router : Router,private api : ApiService) { 
    const auth = localStorage.getItem('users');
    if(auth){
      this.isLogin = false;
      this.isLogout = true;
      this.router.navigate(['/post']);
    }else{
      this.isLogin = true;
      this.isLogout = false;
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      email : [''],
      password : ['']
    })

     
  }
  postLogin(){
    
    if(this.formValue.value.email == ''){
      this.alertError = true;
      this.message = 'Required Email dan Password';
      setTimeout(() => {
        this.alertError = false;
      },3000)
    }else {
      this.api.getUsers()
      .subscribe((res : any)=>{
        res.forEach((v:any,i:any) => {
          if(v.email.toLowerCase() == this.formValue.value.email.toLowerCase()){
            this.usersData = {
              "id" : v.id,
              "name" : v.name
            }
            localStorage.removeItem("users"); 
            localStorage.setItem('users', JSON.stringify(this.usersData));
            this.router.navigate(['/post']);
          }else{
            this.alertError = true;
            this.message = 'Email not registered';
            setTimeout(() => {
              this.alertError = false;
            },3000)
          }
        });
      })
    }
  }
}
