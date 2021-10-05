import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

//   postEmployee(data : any) {
//     return this.http.post<any>("http://localhost:3000/employee",data)
//     .pipe(map((res:any) => {
//       return res;
//     }))
//   }

  getUsers() {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users")
    .pipe(map((res:any) => {
      return res;
    }))
  }

  getAllPost() {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
    .pipe(map((res:any) => {
      return res;
    }))
  }
  getPostById(id:number) {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .pipe(map((res:any) => {
      return res;
    }))
  }
  getComment(id:number) {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .pipe(map((res:any) => {
      return res;
    }))
  }
  getUserById(id:number) {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .pipe(map((res:any) => {
      return res;
    }))
  }
  
}
