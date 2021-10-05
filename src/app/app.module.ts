import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SplashSreenComponent } from './auth/splash-sreen/splash-sreen.component';
import { LoginComponent } from './auth/login/login.component';
import { PostComponent } from './dashboard/post/post.component';
import { PostDetailComponent } from './dashboard/post-detail/post-detail.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PostCommentComponent } from './dashboard/post-comment/post-comment.component';
import { DetailProfileComponent } from './auth/detail-profile/detail-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashSreenComponent,
    LoginComponent,
    PostComponent,
    PostDetailComponent,
    HeaderComponent,
    FooterComponent,
    PostCommentComponent,
    DetailProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
