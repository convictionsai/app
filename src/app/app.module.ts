import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { EventsTimelineComponent } from "./shared/events/events-timeline.component";
import { HeaderComponent } from "./shared/layout/header.component";
import { LeftNavComponent } from "./shared/layout/left-nav.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        LeftNavComponent,
        HeaderComponent,
        RouterModule.forRoot([
            {
                path: "dashboard",
                loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
            },
            {
                path: "reader",
                loadChildren: () => import("./browser/browser.module").then(m => m.BrowserModule)
            },
            {
                path: "community",
                loadChildren: () => import("./community/community.module").then(m => m.CommunityModule)
            },
            {
                path: "events",
                loadChildren: () => import("./events/events.module").then(m => m.EventsModule)
            },
            {
                path: "diary",
                loadChildren: () => import("./diary/diary.module").then(m => m.DiaryModule)
            },
            {
                path: "settings",
                loadChildren: () => import("./settings/settings.module").then(m => m.SettingsModule)
            },
            {
                path: "register",
                loadChildren: () => import("./register/register.module").then(m => m.RegisterModule)
            }
        ]),
        EventsTimelineComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
