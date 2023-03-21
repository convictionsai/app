import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { IconComponent } from "../icons/icon.component";
import { CommunityState, SessionStateService } from "../session/session-state.service";

@Component({
    standalone: true,
    selector: "convictionsai-left-nav",
    imports: [IconComponent, RouterLink],
    template: `
        <aside class="flex h-full bg-gray-50" aria-label="Sidebar">
            <div class="flex flex-col gap-6 z-30 py-5 px-3 w-16 h-full border-r-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center gap-4">
                    <icon (click)="toggle()" name="hamburger" [class.rotate-90]="!open" [width]="6" class="cursor-pointer hover:fill-purple-400 fill-gray-300"></icon>
                </div>
                <div class="flex flex-col items-center gap-4">
                    <icon routerLink="/community" name="homeAccent" [width]="7" class="fill-gray-400"></icon>
                    <icon routerLink="/community/news" name="news" [width]="7" class=""></icon>
                    <icon routerLink="/community/calendar" name="date" [width]="6.5" class="fill-gray-400"></icon>
                    <icon routerLink="/community/forum" name="community" [width]="9" class="fill-gray-400"></icon>
                </div>
            </div>
        </aside>
    `,
    styles: [
        `
            :host {
                background: red;
                height: 100%;
            }
        `
    ]
})
export class LeftNavComponent {
    public open: boolean = true;

    public constructor(private readonly sessionStateService: SessionStateService<CommunityState>) {}
    public toggle(): void {
        this.open = !this.open;
        this.sessionStateService.set("community", "open", this.open);
    }
}
