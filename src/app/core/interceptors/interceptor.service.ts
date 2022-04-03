import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private jwtService: JwtService
  ){ }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isAuth: boolean = !!this.jwtService.getToken()

    if (isAuth){
      const request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.jwtService.getToken()}`
        }
      })
      console.log(`Sending authenticated request to: ${request.urlWithParams}`)
      return next.handle(request).pipe(catchError(x=> this.handleAuthError(x)));;
    }

    const request = req.clone()

    console.log(`Sending request to: ${request.urlWithParams}`)
    console.log(`Request body: ${request.body}`)
    //console.log(request)

    return next.handle(request)
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    console.log("JWT outdated")
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
        //navigate /delete cookies or whatever
        console.log("JWT outdated")
        // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
        return of(err.message); // or EMPTY may be appropriate here
    }
    return throwError(err);
  }
}
