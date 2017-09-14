import { Injectable } from '@angular/core';
import { HttpModule, JsonpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  
getUsers() {
    return this.http.get('https://api.github.com/users/psiva017/repos')
      .map((res: Response) => res.json());
  }
}
