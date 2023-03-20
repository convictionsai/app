import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IconComponent } from "../shared/icons/icon.component";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: LoginComponent
            }
        ]),
        IconComponent,
        ReactiveFormsModule
    ]
})
export class LoginModule {}
