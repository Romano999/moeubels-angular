import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../enums/endpoint';
import { JwtService } from '../services/jwt.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private handlingError = false;
  private error = false;

  constructor(
    private jwtService: JwtService,
    private http: HttpClient,
    private userService: UserService,
  ){ }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isAuth: boolean = !!this.jwtService.getToken();
    let request: HttpRequest<any>;

    if (isAuth && !this.handlingError){
      // Setting header with JWT token
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.jwtService.getToken()}`
        }
      })
    } else {
      request = req.clone()
    }

    this.handlingError = false

    return next.handle(request).pipe(catchError(error => {
      // Check if error is related to JWT tokens
      if (error instanceof HttpErrorResponse && error.status === 403) {
        this.handlingError = true
        return this.handleAuthError(request, error, next);
      }
      return throwError(error);
    }));
  }

  private handleAuthError(req: HttpRequest<any>, err: HttpErrorResponse, next: HttpHandler): Observable<any> {
    if (!this.refreshTokenInProgress) {
      this.refreshTokenInProgress = true;
      const jwtToken = this.jwtService.getRefreshToken();
      if (jwtToken) {
        // Request to refresh the jwt token
        return this.jwtService.refreshToken().pipe(
          switchMap((token: any) => {
            let body = JSON.parse(JSON.stringify(token));
            this.jwtService.saveJwtToken(body["accessToken"])
            this.jwtService.saveRefreshToken(body["refreshToken"])
            this.refreshTokenInProgress = false;
            return next.handle(req.clone({
              setHeaders: {
                Authorization: `Bearer ${this.jwtService.getToken()}`
              }
            }));
          }),
          catchError((err) => {
            this.refreshTokenInProgress = false;
            return throwError(err);
          })
        );
      }
    }

    return next.handle(req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.jwtService.getToken()}`
      }
    }));
    // return throwError(err);
  }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }
}
