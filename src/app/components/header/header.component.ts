import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class header {
  constructor(private http: HttpClient) { }
}