import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { IconComponent } from "../icons/icon.component";
import { Icon } from "../icons/icons";

export class SidebarGroup {
    public label?: string;
    public items: SidebarItem[];
}

export class SidebarItem {
    public icon: {
        name: Icon;
        width?: number;
        color?: string;
    };
    public label: string;
    public class?: string;
    public path: string;
    public bubble?: {
        text: string;
        color: string;
    };
}

@Component({
    selector: "convictionsai-sidebar",
    standalone: true,
    imports: [CommonModule, RouterLink, IconComponent],
    template: `
        <aside id="separator-sidebar" class="h-full shadow-lg" aria-label="Sidebar">
            <div class="h-full py-1 flex flex-col justify-between w-[230px]">
                <div class="flex-1">
                    <div *ngFor="let group of groups; let i = index" class="p-4" [class.border-t]="i > 0" [class.border-gray-100]="i > 0">
                        <h2 *ngIf="group.label" class="text-slate-400 mb-2">{{ group.label }}</h2>
                        <ul>
                            <li *ngFor="let item of group.items" [routerLink]="item.path">
                                <a [ngClass]="item.class || 'text-slate-600'" class="flex items-center p-2 text-base cursor-pointer rounded-lg group hover:bg-purple-100">
                                    <icon [width]="item.icon.width || 4" [name]="item.icon.name" [ngClass]="item.icon.color" class="group-hover:text-gray-900 group-hover:fill-purple-600"></icon>
                                    <span class="flex-1 ml-3 whitespace-nowrap">{{ item.label }}</span>
                                    <span
                                        *ngIf="item.bubble"
                                        [ngClass]="item.bubble.color"
                                        class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium rounded-full group-hover:bg-purple-500 group-hover:text-white"
                                        >{{ item.bubble.text }}</span
                                    >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="p-2">
                    <div id="dropdown-cta" class="p-4 mt-6 rounded-lg bg-slate-100 dark:bg-blue-900" role="alert">
                        <div class="flex items-center mb-3">
                            <span class="bg-purple-200 text-gray-600 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                            <button
                                type="button"
                                class="ml-auto -mx-1.5 -my-1.5 bg-gray-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                                data-dismiss-target="#dropdown-cta"
                                aria-label="Close">
                                <span class="sr-only">Close</span>
                                <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <p class="mb-2 text-sm text-gray-600 dark:text-blue-400">
                            Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                        </p>
                        <a class="text-sm text-purple-600 no-underline hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">Turn new navigation off</a>
                    </div>
                </div>
            </div>
        </aside>
    `
})
export class SidebarComponent {
    @Input() groups: SidebarGroup[];
}
