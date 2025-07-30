import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ApiConstants } from "../constants/api-constants";
import { Observable, of } from "rxjs";
import { log } from "console";

interface ServerResponse {
  httpStatus: string;
  message: string;
  data: {
    token: string;
    username: string;
  };
}

interface loginRequest {
    username: string;
    password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiEndpoint = ApiConstants.API_ENDPOINT + ApiConstants.LOGIN;

  constructor(private http: HttpClient) { }

  login(loginRequest: loginRequest): Observable<ServerResponse> {
    // Temporary mock response for testing frontend
    if (loginRequest.username === 'admin' && loginRequest.password === 'admin') {
      return of({
        httpStatus: 'OK',
        message: 'Login successful',
        data: {
          token: 'mock-jwt-token-for-testing',
          username: loginRequest.username
        }
      });
    }
    
    // Real API call (commented out for now)
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json', 
    // });
    // return this.http.post<ServerResponse>(this.apiEndpoint, loginRequest);
    
    // Mock error response
    return of({
      httpStatus: 'ERROR',
      message: 'Invalid credentials',
      data: {
        token: '',
        username: ''
      }
    });
  }
}