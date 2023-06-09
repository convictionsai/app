import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface Breadcrumb {
    label: string;
    path: string;
}

@Component({
    selector: "convictionsai-breadcrumbs",
    standalone: true,
    imports: [CommonModule],
    template: `
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center">
                <li *ngFor="let breadcrumb of breadcrumbs; let i = index" class="inline-flex items-center">
                    <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                        <svg *ngIf="i === 0" class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>

                        <span [class.font-bold]="i === breadcrumbs.length - 1" [class.text-purple-700]="i === breadcrumbs.length - 1">{{ breadcrumb.label }}</span>

                        <svg *ngIf="i < breadcrumbs.length - 1" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </li>
            </ol>
        </nav>
    `
})
export class BreadcrumbsComponent {
    @Input() breadcrumbs: Breadcrumb[];
}
