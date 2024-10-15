import { Component } from '@angular/core';
import { Post } from '../../interface/post';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: Post[] = [];
  post4: Post[] = [];
  numeroArticolo: number = 0;

  constructor(private postSvc: PostService) {}

  ngOnInit() {
    this.posts = this.postSvc.getAllPost();
    this.post4 = this.posts.slice(0, 4);
  }
  logPostId(id: number) {
    const post = this.postSvc.getPostById(id);
    console.log(post);
  }
}
