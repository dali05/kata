import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor(private http: HttpClient) {}
  getHello() {
    return this.http.get('http://localhost:8080/api/hello', { responseType: 'text' });
  }
}
