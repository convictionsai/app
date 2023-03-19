import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContentHeaderInlineComponent } from "../shared/content/content-header-inline.component";
import { EventRowComponent } from "../shared/events/event-row.component";
import { ScheduleOverviewComponent } from "../shared/events/schedule-overview.component";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        EventRowComponent,
        RouterModule.forChild([
            {
                path: "",
                component: DashboardComponent
            }
        ]),
        ScheduleOverviewComponent,
        ContentHeaderInlineComponent
    ]
})
export class DashboardModule {}
