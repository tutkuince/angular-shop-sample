import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() {
  }

  loggedIn = false;

  login(user: User): boolean {
    if (user.userName === 'tutku' && user.password === '123') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.userName);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logOut() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }
}
