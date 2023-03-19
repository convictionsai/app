import { Component } from "@angular/core";

@Component({
    selector: "convictionsai-diary-entry-summary",
    template: `
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's find more that brings us together.</h2>
        <p class="mb-4 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with
            features like Groups, Watch and Marketplace.
        </p>
        <div class="flex justify-end flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
                href="#"
                class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                View entry
            </a>
        </div>
    `
})
export class DiaryEntrySummaryComponent {}
