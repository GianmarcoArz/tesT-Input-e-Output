import { Component } from '@angular/core';
import { Post } from '../../interface/post';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss',
})
export class ActivePostComponent {
  posts: Post[] = [];
  postAct: Post[] = [];
  numeroArticolo: number = 0;
  constructor(private postSvc: PostService) {}

  ngOnInit() {
    this.posts = this.postSvc.getAllPost();
    this.postAct = this.posts.filter((post) => post.active === true);
    this.numeroArticolo = Math.floor(Math.random() * this.postAct.length);
  }
}
