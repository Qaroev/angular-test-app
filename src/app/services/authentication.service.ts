import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mergeMap, Observable, of} from "rxjs";
import {UserService} from "./user.service";
import {removeLocalStorage, setToLocalStorage} from "../helpers/locale-storage-util";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  constructor(private userService: UserService,) {
  }

  public login(userName: string, password: string): Observable<boolean> {
    return this.userService.getAllUsers().pipe(mergeMap(users => {
      let user = users.find((user) =>
        user.userName == userName && user.password == password)

      if (user) {
        this.userService.currentUser = user;
        setToLocalStorage('isLoggedIn', 'true');
        setToLocalStorage('user', JSON.stringify(user));
        return of(true);
      }

      return of(false);
    }));
  }

  logout() {
    removeLocalStorage('isLoggedIn');
    removeLocalStorage('user');
  }
}
