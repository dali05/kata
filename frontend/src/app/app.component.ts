import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`,
  standalone: true,
  imports: [CommonModule, HttpClientModule],

})
export class AppComponent {
  message = 'Loading...';

  constructor(private http: HttpClient) {
     this.http.get('http://localhost:8080/api/hello', { responseType: 'text' }).subscribe((data: any) => {
      this.message = data;
    });
  }
}

