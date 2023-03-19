import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EditorComponent } from "../shared/forms/editor.component";
import { DiaryComponent } from "./diary.component";
import { DiaryEntrySummaryComponent } from './diary-entry-summary.component';

@NgModule({
    declarations: [DiaryComponent, DiaryEntrySummaryComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: DiaryComponent
            }
        ]),
        EditorComponent
    ]
})
export class DiaryModule {}
