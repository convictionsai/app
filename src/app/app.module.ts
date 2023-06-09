import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { AuthJwtInterceptor } from "./shared/authentication/auth-jwt-interceptor";
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
        HttpClientModule,
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
                path: "search",
                loadChildren: () => import("./search/search.module").then(m => m.SearchModule),
                canActivate: [AuthGuard]
            },
            {
                path: "diary",
                loadChildren: () => import("./diary/diary.module").then(m => m.DiaryModule),
                canActivate: [AuthGuard]
            },
            {
                path: "tracks",
                loadChildren: () => import("./tracks/tracks.module").then(m => m.TracksModule),
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
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthJwtInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
