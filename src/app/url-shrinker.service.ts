import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlShrinkerService {
  private BASE_URL = environment.apiUrl;
  private ENDPOINTS = endpoints;

  constructor(private http: HttpClient) {}

  getList(): Observable<ServerResponse> {
    const url = this.BASE_URL + this.ENDPOINTS.list;
    return this.http.get<ServerResponse>(url);
  }

  shrinkUrl(originalUrl: string): Observable<ServerResponse> {
    const url = this.BASE_URL + this.ENDPOINTS.shrink;
    return this.http.post<ServerResponse>(url, originalUrl);
  }

  navigate(shortUrl): void {
    const url = `${this.BASE_URL}/${shortUrl}`;
    this.http.get<ServerResponse>(url);
  }

  get baseUrl(): string {
    return this.BASE_URL;
  }
}

export interface ServerResponse {
  success: boolean;
  error?: string;
  data?: any;
}

export interface UrlRelationship {
  originalUrl: string;
  shortUrl: string;
  _id: string;
}

const endpoints = {
  list: '/url_shortener',
  shrink: '/url_shortener/shrink_url',
  srhinkNavigate: '/',
};
