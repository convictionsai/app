import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewContainerRef } from "@angular/core";
import Icons, { Icon } from "./icons";
import tippy from "tippy.js";

type IconSize = 6 | 8 | 10 | 12 | 14 | 16 | 20;

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: "icon",
    template: `
        <div #container class="flex gap-x-2.5 items-center" [class.h-full]="tooltip" [ngClass]="classes">
            <div #wrapper [ngStyle]="{ height: height + 'px', width: width + 'px' }"></div>
            <ng-content></ng-content>
        </div>
    `
})
export class IconComponent implements AfterViewInit {
    @ViewChild("container", { read: ViewContainerRef })
    private container: ViewContainerRef;

    @ViewChild("wrapper", { read: ElementRef }) private svg: ElementRef;

    @Input() name: string;
    @Input() classes: string;
    @Input() tooltip: string;
    @Input() width: IconSize | number;
    @Input() height: IconSize | number;

    public constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    public ngAfterViewInit() {
        this.width = this.width * 4;
        if (!this.height) {
            this.height = this.width;
        }
        this.svg.nativeElement.innerHTML = Icons[this.name as Icon];

        if (this.tooltip) {
            tippy(this.container.element.nativeElement, {
                theme: "light",
                content: this.tooltip,
                placement: "bottom",
                animation: "shift-away-extreme",
                animateFill: true,
                followCursor: true,
                inertia: true,
                allowHTML: true
            });
        }
        this.changeDetectorRef.detectChanges();
    }
}
