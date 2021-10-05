import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  getDataPost : any = [];
  getComments : any = [];
  p : number = 1;
  
  constructor(private formBuilder : FormBuilder,private router : Router,private api : ApiService) { }

  ngOnInit(): void {
    this.getAllPost()
  }
  getAllPost(){
    this.api.getAllPost()
    .subscribe((res : any)=>{
      this.getDataPost = res;
    })
  }

  getCommentPost(id:number){
    return this.api.getComment(id)
    .subscribe((res : any)=>{
       return res.length;
    })
  }
  searchPost(event:any){
    if(event.target.value){
      console.log(event.target.value)
    }
  }
  randomInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
