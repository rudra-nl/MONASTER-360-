import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api'; // backend URL

  constructor(private http: HttpClient) {}

  // Example GET
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  // Example POST
  addUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  loginUser(data: { email: string; password: string }) {
  return this.http.post(`${this.apiUrl}/login`, data);
}
  signupUser(data: { name: string; email: string; password: string }) {
  return this.http.post(`${this.apiUrl}/signup`, data);

}
}
