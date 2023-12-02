import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';

import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>
  userId: Pick<User, "id"> | any

  constructor(private postService: PostService, private authService: AuthService){}

  ngOnInit(): void {
    this.posts$ = this.fetchAll();
    this.userId = this.authService.userId
  }

  fetchAll(): Observable<Post[]> {
    return this.postService.fetchAll()
  }

  createPost(){
    this.posts$ = this.fetchAll();
    console.log('Printed from parent post component / page');

  }

  delete(postId: Pick<Post, "id"> | any):void {
    this.postService.deletePost(postId).subscribe(()=> {
      this.posts$ = this.fetchAll();
    })
  }
}
