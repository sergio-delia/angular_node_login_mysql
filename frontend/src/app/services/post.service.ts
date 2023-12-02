import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs"
import { catchError, first } from "rxjs/operators"

import { User } from '../models/User';
import { Post } from '../models/Post';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "http://localhost:3000/post";

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor( private http: HttpClient, private errorHandlerService: ErrorHandlerService ) { }

  fetchAll(): Observable<Post[]>{

    return this.http.get<Post[]>( this.url, {responseType:"json"} ).pipe(
      catchError(this.errorHandlerService.handleError<Post[]>("fetchAll", []))
    )
  }

  createPost(formData: Partial<Post>, userId: Pick<User, "id">): Observable<Post> {
    return this.http.post<Post>( this.url, {title: formData.title, body: formData.body, user: userId }, this.httpOptions ).pipe(
      catchError(this.errorHandlerService.handleError<Post>("createPost"))
    )
  }

  deletePost(postId: Pick<Post, "id"> | undefined): Observable<{}> {
    return this.http.delete<Post>(`${this.url}/${postId}`, this.httpOptions).pipe(
      first(), //Si usa il first per non dover fare poi l'unsubscribe in posts.component
      catchError(this.errorHandlerService.handleError<Post>("deletePost"))
    )
  }
}
