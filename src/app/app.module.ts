import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { AuthGuard } from "./shared/authentication/auth.guard";
import { EventsTimelineComponent } from "./shared/events/events-timeline.component";
import { HeaderComponent } from "./shared/layout/header.component";
import { LeftNavComponent } from "./shared/layout/left-nav.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        LeftNavComponent,
        HeaderComponent,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {
                path: "dashboard",
                loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule),
                canActivate: [AuthGuard]
            },
            {
                path: "reader",
                loadChildren: () => import("./browser/browser.module").then(m => m.BrowserModule),
                canActivate: [AuthGuard]
            },
            {
                path: "community",
                loadChildren: () => import("./community/community.module").then(m => m.CommunityModule),
                canActivate: [AuthGuard]
            },
            {
                path: "events",
                loadChildren: () => import("./events/events.module").then(m => m.EventsModule),
                canActivate: [AuthGuard]
            },
            {
                path: "diary",
                loadChildren: () => import("./diary/diary.module").then(m => m.DiaryModule),
                canActivate: [AuthGuard]
            },
            {
                path: "settings",
                loadChildren: () => import("./settings/settings.module").then(m => m.SettingsModule),
                canActivate: [AuthGuard]
            },
            {
                path: "login",
                loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
            },
            {
                path: "register",
                loadChildren: () => import("./register/register.module").then(m => m.RegisterModule)
            }
        ]),
        EventsTimelineComponent,
        LoginModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
