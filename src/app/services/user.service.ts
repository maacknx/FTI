import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroments/enviroment';
import { formatDate } from '@angular/common';
import { LogType } from '../interfaces/log-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = enviroment.apiUrl;

  

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  
 
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users?id=${id}`)
  }

  createUser(user: User): Observable<User> {
    this.createLog(user, "created").subscribe(ret => console.log(ret));
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  deleteUser(user: User): Observable<User> {
    this.createLog(user, "deleted").subscribe(ret => console.log(ret));
    return this.http.delete<User>(`${this.apiUrl}/users/${user.id}`);
  }

  updateUser(user: User): Observable<User> {
    this.createLog(user, "updated").subscribe(ret => console.log(ret));
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  createLog(user: User, actionLog: string): Observable<LogType> {
    return this.http.post<LogType>(`${this.apiUrl}/logs`, {logs: actionLog + ' user ' + user.name + ' of role ' + user.role + ' on ' + formatDate(new Date(), 'yyyy/MM/dd h:mm', 'en')});
  }

  getLogs(): Observable<LogType[]> {
    return this.http.get<LogType[]>(`${this.apiUrl}/logs`);
  }
}
