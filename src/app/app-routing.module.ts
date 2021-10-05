import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProfileComponent } from './auth/detail-profile/detail-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { SplashSreenComponent } from './auth/splash-sreen/splash-sreen.component';
import { PostCommentComponent } from './dashboard/post-comment/post-comment.component';
import { PostDetailComponent } from './dashboard/post-detail/post-detail.component';
import { PostComponent } from './dashboard/post/post.component';

const routes: Routes = [
    {
        path:'',
        component:SplashSreenComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'post',
        component:PostComponent
    },
    {
        path:'detail-pos/:id',
        component:PostDetailComponent
    },
    {
        path:'detail-comment/:id',
        component:PostCommentComponent
    },
    {
        path:'detail-profile/:id',
        component:DetailProfileComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }