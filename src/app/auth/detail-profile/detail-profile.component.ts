import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.css']
})
export class DetailProfileComponent implements OnInit {
  params !: number;
  getDataProfile : any = [];
  constructor(private api : ApiService,private activatedRoute: ActivatedRoute,private _location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.params = params.id
    });
    this.getCommentById()
  }

  getCommentById(){
    this.api.getUserById(this.params)
    .subscribe((res : any)=>{
      this.getDataProfile = res;
    })
  }
  backClicked() {
    this._location.back();
  }
}
