import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError } from 'rxjs/operators';

export class ApiClient {
    public httpClient: HttpClient;
    public base: string;

    public constructor(httpClient: HttpClient, base: string) {
        this.httpClient = httpClient;
        this.base = base;
    }

    public _search<T>(url: string): Observable<HttpResponse<Array<T>> | any> {
        return this.httpClient
            .get<Array<T>>(`${this.base}${url}`, {
                observe: 'response'
            })
            .pipe(
                catchError((e) => {
                    return of(e);
                })
            );
    }

    public _get<T>(url: string): Observable<HttpResponse<T>> {
        return this.httpClient.get<T>(`${this.base}${url}`, { observe: 'response' }).pipe(
            catchError((e) => {
                return of(e);
            })
        );
    }

    public _post<T, B = any>(url: string, body?: B): Observable<HttpResponse<T> | any> {
        return this.httpClient
            .post<T>(`${this.base}${url}`, body, {
                observe: 'response'
            })
            .pipe(
                catchError((e) => {
                    return of(e);
                })
            );
    }

    public _put<T>(url: string, body: any): Observable<HttpResponse<T> | any> {
        return this.httpClient
            .put<T>(`${this.base}${url}`, body, {
                observe: 'response'
            })
            .pipe(
                catchError((e) => {
                    return of(e);
                })
            );
    }

    public _patch<T>(url: string, body: any): Observable<HttpResponse<T> | any> {
        return this.httpClient
            .patch<T>(`${this.base}${url}`, body, {
                observe: 'response'
            })
            .pipe(
                catchError((e) => {
                    return of(e);
                })
            );
    }

    public _delete<T>(url: string): Observable<HttpResponse<T> | any> {
        return this.httpClient.delete<T>(`${this.base}${url}`, { observe: 'response' }).pipe(
            catchError((e) => {
                return of(e);
            })
        );
    }
}
