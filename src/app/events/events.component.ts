import { Component } from "@angular/core";

@Component({
    selector: "convictionsai-events",
    template: `
        <p>events works!</p>
        <div class="m-5">
            <convictionsai-schedule-overview></convictionsai-schedule-overview>
        </div>
        <div class="m-5">
            <convictionsai-event-row></convictionsai-event-row>
        </div>
    `
})
export class EventsComponent {}
