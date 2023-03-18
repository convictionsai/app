import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/layout/header.component";
import { LeftNavComponent } from "./shared/layout/left-nav.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, LeftNavComponent, HeaderComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
