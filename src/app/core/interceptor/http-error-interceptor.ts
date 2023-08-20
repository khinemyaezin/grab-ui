import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService, LoginService } from '../authentication';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  forbiddenStatus = [
    HttpStatusCode.Unauthorized,
    HttpStatusCode.Forbidden
  ]

  constructor(private router: Router,private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (this.forbiddenStatus.includes(error.status)) {
          this.authService.logout();
        }
        return throwError(() => error);
      })
    );
  }
}
