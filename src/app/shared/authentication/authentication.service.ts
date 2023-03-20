import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class AuthenticationService {
    public user: any;
    public loggedIn: boolean;

    public constructor(private readonly router: Router) {
        if (localStorage.getItem("user")) {
            this.user = JSON.parse(localStorage.getItem("user"));
            this.loggedIn = true;
        }
    }

    public static isLoggedIn(): boolean {
        return !!localStorage.getItem("user");
    }

    public login(email: string, password: string, remember: boolean) {
        this.user = {
            firstName: "John",
            lastName: "Doe",
            email
        };
        this.loggedIn = true;
        localStorage.setItem("user", JSON.stringify(this.user));
    }

    public logout() {
        this.user = null;
        this.loggedIn = false;
        localStorage.removeItem("user");
        void this.router.navigate(["/login"]);
    }
}
