import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../enums/endpoint';
import { JwtService } from '../services/jwt.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  private refreshTokenInProgress = false;

  constructor(
    private jwtService: JwtService,
    private http: HttpClient,
    private userService: UserService,
  ){ }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isAuth: boolean = !!this.jwtService.getToken()

    // console.log(req.body);
    // console.log(req.method);
    // console.log(req.url);

    if (isAuth){
      const request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.jwtService.getToken()}`
        }
      })
      console.log(`Sending authenticated request to: ${request.urlWithParams}`)
      return next.handle(request).pipe(catchError(x=> this.handleAuthError(request, x, next)));;
    }

    const request = req.clone()

    console.log(`Sending request to: ${request.urlWithParams}`)
    console.log(`Request body: ${request.body}`)
    //console.log(request)

    return next.handle(request)
  }

  private handleAuthError(req: HttpRequest<any>, err: HttpErrorResponse, next: HttpHandler): Observable<any> {
    console.log("JWT outdated")

    if (!this.refreshTokenInProgress) {
    //   this.refreshTokenInProgress = true;

    //   const httpOptions = {
    //     headers: new HttpHeaders(
    //       {Authorization: `Bearer ${this.jwtService.getRefreshToken()}`})
    //   };

    //   this.http.get(
    //     `${environment.api_url}/${Endpoint.RefreshToken}`,
    //     httpOptions
    //   ).subscribe({
    //     next: (response: any) => {
    //       let body = JSON.parse(JSON.stringify(response));
    //       this.jwtService.saveJwtToken(body["accessToken"])
    //       this.jwtService.saveRefreshToken(body["refreshToken"])
    //       this.userService.saveId(body["actorId"])
    //       this.userService.saveRole(body["role"])
    //       this.refreshTokenInProgress = false
    //       console.log(body)
    //     },
    //     error: (e) => {
    //       console.log(e)
    //       this.refreshTokenInProgress = false
    //     }
    //   })
      return of(err.message);
    }
    return throwError(err);
  }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }
}
