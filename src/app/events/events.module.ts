import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EventRowComponent } from "../shared/events/event-row.component";
import { ScheduleOverviewComponent } from "../shared/events/schedule-overview.component";
import { EventsComponent } from "./events.component";

@NgModule({
    declarations: [EventsComponent],
    imports: [
        CommonModule,
        ScheduleOverviewComponent,
        EventRowComponent,
        RouterModule.forChild([
            {
                path: "",
                component: EventsComponent
            }
        ])
    ]
})
export class EventsModule {}
