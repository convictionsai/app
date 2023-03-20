import { Component } from "@angular/core";
import { AuthenticationService } from "./shared/authentication/authentication.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    public constructor(public readonly authenticationService: AuthenticationService) {}
}
