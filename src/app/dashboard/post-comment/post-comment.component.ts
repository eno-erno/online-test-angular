import { Component, OnInit } from '@angular/core';
import {Params,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  getDataPost : any = [];
  getDataComment : any = [];
  params !: number;

  constructor(private api : ApiService,private activatedRoute: ActivatedRoute,private _location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.params = params.id
    });
    this.getAllPostById()
    this.getCommentById()
  }
  getAllPostById(){
    this.api.getPostById(this.params)
    .subscribe((res : any)=>{
      this.getDataPost = res;
    })
  }

  getCommentById(){
    this.api.getComment(this.params)
    .subscribe((res : any)=>{
      this.getDataComment = res;
    })
  }
  backClicked() {
    this._location.back();
  }
}
