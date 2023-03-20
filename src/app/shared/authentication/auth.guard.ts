import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { AuthenticationService } from "./authentication.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
    public constructor(private router: Router) {}

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (AuthenticationService.isLoggedIn()) {
            return true;
        }

        await this.router.navigate(["/login"], {
            queryParams: { returnUrl: state.url }
        });

        return false;
    }
}
