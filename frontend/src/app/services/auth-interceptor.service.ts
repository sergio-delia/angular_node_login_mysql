import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{


  constructor() { }

  //BISOGNA ANCHE ANDARE IN APP MODULE A GESTIRE GLI INTERCEPTORS
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if(token){
      const clonedRequest = req.clone({
        headers: req.headers.set("Authorization", "Bearer "+ token) //Nel backend abbiamo detto di fare il controllo su un headers chiamato Authorization
      })

      return next.handle(clonedRequest)
    } else {
      return next.handle(req);
    }
  }
}
