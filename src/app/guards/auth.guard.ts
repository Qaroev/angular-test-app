import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {getFromLocalStorage} from "../helpers/locale-storage-util";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let itt=this.isLoggedIn();
    console.log(itt);
    if (this.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  public isLoggedIn(): boolean {
    return getFromLocalStorage('isLoggedIn') == 'true';
  }
}
