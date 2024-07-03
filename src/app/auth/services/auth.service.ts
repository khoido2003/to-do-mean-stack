import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthCheckResponse, Login, Register } from '../../../types/auth';
import { Observable } from 'rxjs';
import { API_PREFIX } from '../../../constants/api-prefix';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: Register): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${API_PREFIX}/register`, data, {
      headers,
      withCredentials: true,
    });
  }

  login(data: Login) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${API_PREFIX}/login`, data, {
      headers,
      withCredentials: true,
    });
  }

  isLoggedIn(): Observable<AuthCheckResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<AuthCheckResponse>(`${API_PREFIX}/auth/check`, {
      headers,
      withCredentials: true,
    });
  }
}
