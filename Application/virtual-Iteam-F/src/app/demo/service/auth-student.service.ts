import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthStudentService {

  helper = new JwtHelperService();

  constructor(private http: HttpClient) { }
  private url = 'http://127.0.0.1:3000/';

  studentLogin(credentials: any): Observable<any> {
    return this.http.post<any>(this.url + 'student/login', credentials);
  }
  studentRegister(userData: any): Observable<any> {
    return this.http.post<any>(this.url + 'student/register', userData);
  }
  saveDataStudent(token: any) {
    let decodedToken: any = this.helper.decodeToken(token);
    localStorage.setItem('token_student', token);
    localStorage.setItem('role', decodedToken.role);
    localStorage.setItem('name', decodedToken.name); // Store student's name
  }
  
  studentLoggedIn() {
    let token: any = localStorage.getItem('token_student');
    if (!token) {
      return false;
    }
    if (this.helper.isTokenExpired(token)) {
      return false;
    }
    return true;
  }
  
}
