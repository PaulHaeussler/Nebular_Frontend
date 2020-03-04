import { Injectable } from '@angular/core';
import { Module } from '../module';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ModuleServiceService {

  constructor(
    private http: Http
  ) { }

  getUser() {
    /*
    return this.http.get('/api/user')
      .map((res: Response) => res.json().response);
      */
  }
}
