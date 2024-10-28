import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '@/app/core/models/user.model';
import {environment} from '@/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => new Error('Could not fetch users.'));
      })
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user).pipe(
      catchError((error) => {
        console.error('Error adding user:', error);
        return throwError(() => new Error('Unable to add user.'));
      })
    );
  }
}
