import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class AuthService {

  constructor() {
  }

  // public isLoggedSubject:Subject<boolean>=new Subject<boolean>()
  public isLogged$:Subject<boolean>=new Subject<boolean>()
  private isLogged = false;

  logIn() {
    this.isLogged = true;
    this.isLogged$.next(this.isLogged);
  }

  logOut() {
    this.isLogged = false;
    this.isLogged$.next(this.isLogged);
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }

  getToken() {
    return 'test'
  }
}
