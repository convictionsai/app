import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "convictionsai-events-timeline",
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="h-full w-96 p-5 border-l-2 border-gray-200 shadow-2xl">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl tracking-tight font-extrabold text-purple-600">Upcoming Events</h2>
                <div>
                    <a href="#" class="inline-flex justify-center items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                        View more
                        <svg class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <ol class="relative border-l m-3 border-gray-300/75 dark:border-gray-700">
                <li class="mb-10 ml-2 cursor-pointer hover:bg-purple-200 p-4">
                    <span class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-300 ring-8 ring-purple-200 dark:bg-blue-900 dark:ring-gray-900">
                        <svg aria-hidden="true" class="h-3 w-3 text-purple-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </span>
                    <h3 class="mb-1 flex items-center -mt-0.5 ml-1 text-lg font-bold text-gray-700 dark:text-white">
                        Prayer Group Meetup
                        <span class="mr-2 ml-3 rounded bg-purple-200 px-2.5 py-0.5 text-sm font-medium text-purple-800 dark:bg-blue-900 dark:text-blue-300">Latest</span>
                    </h3>
                    <time class="mb-2 block text-sm font-normal ml-1 leading-none text-gray-400 dark:text-gray-500"
                        >Occurs at

                        <span class="font-bold text-purple-500">10:30 PM</span>
                        on
                        <span class="font-bold text-purple-500">January 13th</span>
                    </time>
                    <p class="mb-4 text-base ml-1 font-normal text-gray-500 dark:text-gray-400">We will be praying for the sick and the lost...</p>
                    <a
                        class="inline-flex items-center rounded-lg ml-1 border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium ring-1 ring-purple-200 text-gray-900 cursor-pointer hover:bg-purple-500 hover:text-white focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200">
                        <svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                clip-rule="evenodd"></path>
                        </svg>
                        RSVP
                    </a>
                </li>
            </ol>
        </div>
    `
})
export class EventsTimelineComponent {}
