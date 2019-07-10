import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface User {
  _id: string;
  id: string;
  age: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers$() {
    return this.http.get<User>('http://localhost:3000/customer');
  }

  getUser$(id: string) {
    return this.http.get<User>(`http://localhost:3000/customer/${id}`);
  }

  addUser$(user: User) {
    return this.http.post<User>('http://localhost:3000/c', user)
      .pipe(tap( (user: User) => console.log(`edited member: id=${user.id}`) ),
        catchError( error => { console.log(error); return throwError(error); } )
      );
  }

  deleteUser$(id: string) {
    return this.http.delete(`http://localhost:3000/user/${id}`);
  }

  editMember$(user: User) {
    return this.http.put<User>('http://localhost:3000/user', user)
      .pipe(tap((member: User) => console.log(`edited user: id=${user.id}`)),
            catchError(error => {
              console.log(error);
              return throwError(error);  // coger los errores que produce el observable
            })
          );
  }

}
