import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { books, people } from "../shared/data/static-data";
import { FeedbackRatingComponent } from "../shared/feedback/feedback-rating.component";

@Component({
    selector: "convictionsai-search-bar",
    standalone: true,
    imports: [CommonModule, FeedbackRatingComponent],
    template: `
        <label for="search-dropdown" class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
        <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            class="w-[150px] flex justify-center items-center rounded-l-lg border border-gray-200 bg-gray-100 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:bg-gray-300"
            type="button">
            All categories
            <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>
        <div id="dropdown" class="z-10 hidden px-3 pt-1 bg-white rounded-lg shadow w-80 dark:bg-gray-700">
            <div class="flex items-center justify-between pt-2">
                <h6 class="text-sm font-medium text-black dark:text-white">Filters</h6>
                <div class="flex items-center space-x-3">
                    <a href="#" class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"> Save view </a>
                    <a href="#" class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"> Clear all </a>
                </div>
            </div>

            <div class="pt-3 pb-2">
                <label for="input-group-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="input-group-search"
                        class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search keywords..." />
                </div>
            </div>

            <div id="accordion-flush" data-accordion="collapse" data-active-classes="text-black dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                <h2 id="worldwide-shipping-heading">
                    <button
                        type="button"
                        class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                        data-accordion-target="#worldwide-shipping-body"
                        aria-expanded="true"
                        aria-controls="worldwide-shipping-body">
                        <span>Books ({{ contexts["books"].length }})</span>
                        <svg aria-hidden="true" data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                        </svg>
                    </button>
                </h2>
                <div id="worldwide-shipping-body" class="hidden" aria-labelledby="worldwide-shipping-heading">
                    <div class="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
                        <label *ngFor="let book of contexts['books']; let i = index" class="relative flex items-center cursor-pointer">
                            <input (change)="onToggle('books', i)" [checked]="book.enabled" type="checkbox" class="sr-only peer" name="shipping_method" />
                            <div
                                class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ book.label }}</span>
                        </label>
                    </div>
                </div>

                <!-- People -->
                <h2 id="category-heading">
                    <button
                        type="button"
                        class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                        data-accordion-target="#category-body"
                        aria-expanded="true"
                        aria-controls="category-body">
                        <span>People ({{ contexts["people"].length }})</span>
                        <svg aria-hidden="true" data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                        </svg>
                    </button>
                </h2>
                <div id="category-body" class="hidden" aria-labelledby="category-heading">
                    <div class="py-2 font-light border-b border-gray-200 dark:border-gray-600">
                        <ul class="space-y-2">
                            <li *ngFor="let person of contexts['people']; let i = index" class="flex items-center">
                                <input
                                    [id]="person.label"
                                    type="checkbox"
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label [for]="person.label" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-100">
                                    {{ person.label }} <span class="text-gray-400">({{ person.weight | number }} mentions)</span></label
                                >
                            </li>
                            <a href="#" class="flex items-center text-sm font-medium text-purple-600 dark:text-primary-500 hover:underline"> View all...</a>
                        </ul>
                    </div>
                </div>

                <!-- Rating -->
                <h2 id="rating-heading">
                    <button
                        type="button"
                        class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                        data-accordion-target="#rating-body"
                        aria-expanded="true"
                        aria-controls="rating-body">
                        <span class="flex items-center"
                            >Rating
                            <svg
                                *ngFor="let o of [1, 2, 3, 4, 5]"
                                [class.!text-purple-500]="rating >= o"
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </span>
                        <svg aria-hidden="true" data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                        </svg>
                    </button>
                </h2>
                <div id="rating-body" class="hidden" aria-labelledby="rating-heading">
                    <convictionsai-feedback-rating [rating]="rating" (ratingChange)="rating = $event"></convictionsai-feedback-rating>
                </div>
            </div>
        </div>
    `
})
export class SearchBarComponent {
    public contexts: {
        [key: string]: {
            label: string;
            weight?: number;
            enabled: boolean;
        }[];
    } = {
        books: books.map(book => ({
            label: book.title,
            enabled: false
        })),
        people: people
            .map(person => ({
                label: person.name,
                weight: person.weight,
                enabled: false
            }))
            .sort(function (a, b) {
                return a.weight - b.weight;
            })
            .reverse()
    };
    public rating: number;

    public onToggle(context: string, index: number) {
        this.contexts[context][index].enabled = !this.contexts[context][index].enabled;
    }
}
