import { ApprovedProvider } from './../models/approved-provider';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Provider } from '../models/provider';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthoService } from './autho.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApprovedProviderService {
  // private baseUrl = 'http://localhost:8090/';
  private url = environment.baseUrl + 'api/approved/';

  editProvider = null;

  constructor(
    private datePipe: DatePipe,
    private http: HttpClient,
    private auth: AuthoService,
    private router: Router
  ) {}

  destroy(id: string | number) {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.delete<any>(`${this.url}/${id}`, httpOptions);
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  show(id: any): Observable<Provider> {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http.get<Provider>(`${this.url}/${id}`, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('ProviderService.index(): error retrieving');
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  index() {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if (this.auth.checkLogin()) {
      return this.http
        .get<ApprovedProvider[]>(this.url + 'providers', httpOptions)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError(
              'ApprovedProviderService.index(): error retrieving list'
            );
          })
        );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  create(ap: ApprovedProvider) {
    const credentials = this.auth.getCredentials();
    if (this.auth.checkLogin()) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`,
          'X-Requested-With': 'XMLHttpRequest'
        })
      };
      return this.http.post<Provider>(this.url, ap, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            'ProviderService.create(): error creating provider'
          );
        })
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  update(provider: Provider) {
    const credentials = this.auth.getCredentials();
    if (this.auth.checkLogin()) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`,
          'X-Requested-With': 'XMLHttpRequest'
        })
      };
      return this.http.put<any>(
        this.url + '/' + provider.id,
        provider,
        httpOptions
      );
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
