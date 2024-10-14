import { Component, Input } from '@angular/core';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() posts: Post[] = [];
  onSubmit(post: Post) {
    console.log('Post modificato:', post);
  }
}
