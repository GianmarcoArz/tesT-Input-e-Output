import { Component } from '@angular/core';
import { Post } from '../../interface/post';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss',
})
export class InactivePostComponent {
  posts: Post[] = [];
  postInac: Post[] = [];
  numeroArticolo: number = 0;

  constructor(private postSvc: PostService) {}

  ngOnInit() {
    this.posts = this.postSvc.getAllPost();
    this.postInac = this.posts.filter((post) => post.active === false);
    this.numeroArticolo = Math.floor(Math.random() * this.postInac.length);
  }
}
