import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostDetailComponent,
    ActivePostComponent,
    InactivePostComponent,
    SinglePostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
