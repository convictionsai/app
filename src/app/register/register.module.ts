import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RegisterAccountChooserComponent } from "./register-account-chooser.component";
import { RegisterComponent } from "./register.component";

@NgModule({
    declarations: [RegisterComponent, RegisterAccountChooserComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: RegisterComponent
            }
        ])
    ]
})
export class RegisterModule {}
