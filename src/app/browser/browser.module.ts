import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserComponent } from "./browser.component";
import { SearchOptionDrawerComponent } from "./search/search-option-drawer.component";
import { CardComponent } from "./browser/card.component";

@NgModule({
    declarations: [SearchOptionDrawerComponent, BrowserComponent, CardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: BrowserComponent
            }
        ])
    ]
})
export class BrowserModule {}
