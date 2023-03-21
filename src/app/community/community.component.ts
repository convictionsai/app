import { Component } from "@angular/core";

@Component({
    selector: "convictionsai-community",
    template: `
        <div class="flex h-full">
            <convictionsai-left-nav></convictionsai-left-nav>
            <div class="flex-1">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class CommunityComponent {}
