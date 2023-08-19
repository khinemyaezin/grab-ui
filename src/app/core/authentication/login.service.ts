import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User } from './interface';
import { map } from 'rxjs/operators';
import { Menu } from '../bootstrap/menu.service';
import { api_urls } from 'src/app/api.urls';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

  login(username: string, password: string, rememberMe = false) {
    return this.http.post<Token>( api_urls.public_auth_login, { username, password });
  }

  refresh(params: Record<string, any>) {
    return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.post<any>('/auth/logout', {});
  }

  me() {
    return this.http.get<User>('/me');
  }

  menu() {
    return this.http.get<{ menu: Menu[] }>('/me/menu').pipe(map(res => res.menu));
  }
}
