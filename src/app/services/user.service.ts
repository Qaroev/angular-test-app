import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable()
export class UserService {

  private _currentUser!: User;

  public get currentUser(): User {
    if (!this._currentUser) {
      const userData = localStorage.getItem('userData');
      this._currentUser = userData ? JSON.parse(userData) : userData;
    }

    return this._currentUser;
  }

  public set currentUser(user: User) {
    this._currentUser = user;
  }

  constructor(private http: HttpClient) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('./assets/usersData.json');
  }

  public hasPermission(permission: string): boolean {
    return this.currentUser.access!.permissions.includes(permission)
  }
}
