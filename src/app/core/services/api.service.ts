import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { UserCredentials } from '../models/usercredentials';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get<Type>(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get<Type>(`${environment.api_url}/${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  getAll(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}/${path}/all`, { params })
      .pipe(catchError(this.formatErrors));
  }

  getWithPagination(path: string, searchterm: string, page: number, params: HttpParams = new HttpParams()): Observable<any> {
    /*this.http.get(`${environment.api_url}/${path}/name/${searchterm}/${page}`, { params }).subscribe({
      next(json:any) {
      },
      error(msg) {
      }
    });*/
    return this.http.get(`${environment.api_url}/${path}/name/${searchterm}/${page}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*',
      })
    };

    return this.http.put(
      `${environment.api_url}/${path}`,
      JSON.stringify(body),
      httpOptions
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*',
      })
    };

    return this.http.post(
      `${environment.api_url}/${path}`,
      JSON.stringify(body),
      httpOptions
    ).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${environment.api_url}/${path}`
    ).pipe(catchError(this.formatErrors));
  }

  deleteWithBody(path: string, body: Object = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*',
      }),
      body: JSON.stringify(body)
    };

    return this.http.delete(
      `${environment.api_url}/${path}`,
      httpOptions
    ).pipe(catchError(this.formatErrors));
  }

  login(userCredentials: UserCredentials, params: HttpParams = new HttpParams()): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders(
        {'Content-Type': 'application/x-www-form-urlencoded'})
    };

    const body = new URLSearchParams();
    
    // Todo: Salt
    body.set('username', userCredentials.username);
    body.set('password', userCredentials.password);

    return this.http.post(
      `${environment.api_short_url}/login`,
      body.toString(),
      httpOptions
    ).pipe(catchError(this.formatErrors));
  }

  payment(path: string) {
    return this.http.delete(
      `${environment.api_url}/${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
