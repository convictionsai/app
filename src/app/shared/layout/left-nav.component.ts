import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { IconComponent } from "../icons/icon.component";

@Component({
    standalone: true,
    selector: "convictionsai-left-nav",
    imports: [IconComponent, RouterLink],
    template: `
        <aside class="flex top-0 left-0 h-full bg-white" aria-label="Sidebar">
            <div class="overflow-y-auto z-30 py-3 px-3 w-16 h-full border-r-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center gap-4">
                    <icon routerLink="dashboard" name="homeAccent" [width]="8" class="fill-gray-400"></icon>
                    <icon routerLink="reader" name="read" [width]="9.5" class="fill-purple-500"></icon>
                    <icon routerLink="events" name="date" [width]="7.5" class="fill-gray-400"></icon>
                    <icon routerLink="community" name="community" [width]="9" class="fill-gray-400"></icon>
                </div>
            </div>
            <button
                id="hide-secondary-sidenav-button"
                aria-controls="secondary-sidenav"
                type="button"
                class="inline-flex absolute bottom-2 left-20 p-2 text-gray-500 rounded-full cursor-pointer dark:text-gray-400 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-900 dark:hover:text-white bg-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </aside>
    `
})
export class LeftNavComponent {}
