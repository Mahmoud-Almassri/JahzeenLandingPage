import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthorizeService } from 'src/app/shared/services/authorize.service';

@Injectable()
export class AuthorizeGuard implements CanActivate{
    constructor(public auth: AuthorizeService, public router: Router) {
    }

    canActivate(): boolean {
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['Home']);
        return false;
      }
      return true;
    }
}