import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return [
      {
        id: 1,
        name: 'john',
        city: 'Turkey',
        salary: 1459,
        dob: new Date('05/10/1984'),
      },
      {
        id: 2,
        name: 'hope',
        city: 'PHC',
        salary: 3000,
        dob: new Date('05/10/1989'),
      },

      {
        id: 3,
        name: 'susan',
        city: 'PHC',
        salary: 5000,
        dob: new Date('05/10/1975'),
      },
      {
        id: 4,
        name: 'anthony',
        city: 'BYC',
        salary: 7098,
        dob: new Date('06/09/1999'),
      },
    ];
  }

  getJsonUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    
  }
  getJsonUser(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
