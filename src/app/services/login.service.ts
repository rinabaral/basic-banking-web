import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ApiConstants } from "../constants/api-constants";
import { Observable } from "rxjs";
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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 
    });
    return this.http.post<ServerResponse>(this.apiEndpoint, loginRequest);  
  }
}