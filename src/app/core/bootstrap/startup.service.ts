import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

import { Menu, MenuService } from './menu.service';
import { AuthService, User } from '../authentication';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  constructor(
    private authService: AuthService,
    private menuService: MenuService,
    private permissonsService: NgxPermissionsService,
  ) {}

  /**
   * Load the application only after get the menu or other essential informations
   * such as permissions and roles.
   */
  load() {
    return new Promise<void>((resolve, reject) => {
      this.authService
        .change()
        .pipe(
          tap((user) => this.setPermissions(user)),
          switchMap(() => this.authService.menu()),
          tap((menu) => this.setMenu(menu))
        )
        .subscribe(
          () => resolve(),
          () => resolve()
        );
    });
  }

  private setMenu(menu: Menu[]) {
    this.menuService.addNamespace(menu, 'menu');
    this.menuService.set(menu);
  }

  private setPermissions(user: User) {
    const permissions = user?.permissions ? [...user.permissions] : [];
    this.permissonsService.loadPermissions(permissions);
  }
}
