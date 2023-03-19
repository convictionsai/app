import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "convictionsai-event-row",
    standalone: true,
    imports: [CommonModule],
    template: `
        <section class="bg-white dark:bg-gray-900">
            <div class="mx-auto max-w-6xl py-8 lg:py-16">
                <div class="mb-4 grid gap-4 px-4 sm:mb-5 sm:grid-cols-3 sm:gap-6 md:gap-12">
                    <!-- Column -->
                    <div class="sm:col-span-2">
                        <h2 class="mb-4 flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:mb-5 sm:text-2xl">The 4th Digital Transformation</h2>
                        <dl class="mb-4 flex items-center space-x-4 sm:mb-5">
                            <div>
                                <dt class="sr-only">Date</dt>
                                <dd class="flex items-center text-gray-900 dark:text-white">
                                    <svg class="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="font-semibold">26th of November, 2022</span>
                                </dd>
                            </div>
                            <div>
                                <dt class="sr-only">Location</dt>
                                <dd class="flex items-center text-gray-900 dark:text-white">
                                    <svg class="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="font-semibold">California, USA</span>
                                </dd>
                            </div>
                        </dl>
                        <dl>
                            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details:</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">
                                USA enterprises and governments have committed to a technology-driven future, making USA one of the fastest-growing markets for digital technologies. This has also
                                increased the exposure to the risk of cyber-attacks as businesses continue to progress toward being more digital in areas such as the workplace, which requires more
                                security measures.
                            </dd>
                        </dl>
                    </div>
                    <!-- Column -->
                    <dl class="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                        <dt class="mb-2 leading-none text-gray-500 dark:text-gray-400">Participants</dt>
                        <dd class="mb-4 flex -space-x-4 sm:mb-5">
                            <img
                                class="h-8 w-8 rounded-full border-2 border-gray-50 dark:border-gray-700"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                                alt="Helene Engels" />
                            <img
                                class="h-8 w-8 rounded-full border-2 border-gray-50 dark:border-gray-700"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                                alt="Robert Brown" />
                            <img
                                class="h-8 w-8 rounded-full border-2 border-gray-50 dark:border-gray-700"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                alt="Bonnie Green" />
                            <button
                                type="button"
                                class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-50 bg-gray-600 text-xs font-medium text-white hover:bg-gray-500 dark:border-gray-700">
                                +9
                            </button>
                        </dd>
                        <dt class="mb-2 leading-none text-gray-500 dark:text-gray-400">Online</dt>
                        <dd class="mb-4 font-medium text-gray-900 dark:text-white sm:mb-5">Google Meet</dd>
                        <dt class="mb-2 leading-none text-gray-500 dark:text-gray-400">Duration</dt>
                        <dd class="font-medium text-gray-900 dark:text-white">All day</dd>
                    </dl>
                </div>
                <div class="flex items-center space-x-4 px-4">
                    <button
                        type="button"
                        class="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg aria-hidden="true" class="mr-1 -ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>
                        </svg>
                        Edit
                    </button>
                    <button
                        type="button"
                        class="rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                        Preview
                    </button>
                    <button
                        type="button"
                        class="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                        <svg aria-hidden="true" class="mr-1.5 -ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Delete
                    </button>
                </div>
            </div>
        </section>
    `
})
export class EventRowComponent {}
