import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "convictionsai-feedback-rating",
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
            <div *ngFor="let n of [5, 4, 3, 2, 1]" class="flex items-center">
                <input
                    [id]="id + n"
                    [name]="id"
                    (change)="ratingChange.emit(n)"
                    type="radio"
                    class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label [for]="id + n" class="flex items-center ml-2">
                    <svg
                        *ngFor="let o of [1, 2, 3, 4, 5]"
                        [class.!text-purple-500]="n >= o"
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </label>
            </div>
        </div>
    `
})
export class FeedbackRatingComponent {
    @Input() public rating: number;
    @Output() public ratingChange: EventEmitter<number> = new EventEmitter();

    public id = Math.random().toString(36).substring(10);
}
