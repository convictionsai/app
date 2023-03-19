import { Component } from "@angular/core";

@Component({
    selector: "convictionsai-diary",
    template: `
        <h2 class="mb-4 text-3xl tracking-tight font-semibold text-gray-900 dark:text-white">My Diary</h2>
        <div class="flex flex-col gap-10">
            <convictionsai-editor></convictionsai-editor>
            <div class="grid grid-cols-3 gap-10">
                <convictionsai-diary-entry-summary></convictionsai-diary-entry-summary>
                <convictionsai-diary-entry-summary></convictionsai-diary-entry-summary>
                <convictionsai-diary-entry-summary></convictionsai-diary-entry-summary>
                <convictionsai-diary-entry-summary></convictionsai-diary-entry-summary>
                <convictionsai-diary-entry-summary></convictionsai-diary-entry-summary>
            </div>
        </div>
    `
})
export class DiaryComponent {}
