import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TracksComponent } from "./tracks.component";
import { TrackComponent } from "./track.component";
import { TrackCardComponent } from "./track-card.component";

@NgModule({
    declarations: [TracksComponent, TrackComponent, TrackCardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: TracksComponent
            }
        ])
    ]
})
export class TracksModule {}
