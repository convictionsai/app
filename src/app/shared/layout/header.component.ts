import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { IconComponent } from "../icons/icon.component";

@Component({
    selector: "convictionsai-header",
    standalone: true,
    imports: [CommonModule, RouterLink, IconComponent],
    template: `
        <header class="">
            <nav class="bg-purple-400 shadow-2xl border-b-4 border-purple-500">
                <div class="flex flex-wrap items-center px-4 py-2.5 gap-8">
                    <a routerLink="/" class="flex items-center">
                        <img src="assets/logo.png" alt="convictions.ai" class="h-[45px]" />
                    </a>
                    <div class="flex items-center gap-4">
                        <!--                        <icon routerLink="dashboard" name="homeAccent" [width]="8" class="fill-gray-400"></icon>-->
                        <!--                        <icon routerLink="reader" name="read" [width]="9.5" class="fill-purple-500"></icon>-->
                        <!--                        <icon routerLink="events" name="date" [width]="7.5" class="fill-gray-400"></icon>-->
                        <!--                        <icon routerLink="community" name="community" [width]="9" class="fill-gray-400"></icon>-->
                        <a routerLink="/dashboard" class="">Home</a>
                        <a routerLink="reader" class="">Reader</a>
                        <a routerLink="events" class="">Events</a>
                        <a routerLink="community" class="">Community</a>
                    </div>
                    <!-- search -->
                    <form class="flex flex-1">
                        <label for="search-dropdown" class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                        <button
                            id="dropdown-button"
                            data-dropdown-toggle="dropdown"
                            class="z-10 hidden flex-shrink-0 items-center rounded-l-lg border border-gray-200 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-700 md:inline-flex"
                            type="button">
                            All categories
                            <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <div
                            id="dropdown"
                            class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
                            data-popper-reference-hidden=""
                            data-popper-escaped=""
                            data-popper-placement="top"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(897px, 5637px, 0px);">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button type="button" class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                                </li>
                            </ul>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="search"
                                id="search-dropdown"
                                class="border-l-1 md:border-l-6 z-20 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-l-gray-600 dark:bg-gray-800 dark:text-white  dark:placeholder-gray-400 dark:focus:border-primary-500 md:rounded-l-none md:border-l-gray-50"
                                placeholder="Search anything..."
                                required />
                            <button
                                type="submit"
                                class="absolute top-0 right-0 rounded-r-lg border border-primary-700 bg-primary-700 p-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                    <div class="flex items-center gap-3">
                        <a routerLink="diary" class="">My Diary</a>

                        <!-- notification dropdown -->
                        <div class="flex  flex-1">
                            <button
                                id="dropdownNotificationButton"
                                data-dropdown-toggle="dropdownNotification"
                                class="inline-flex items-center text-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"
                                type="button">
                                <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                                </svg>
                                <div class="relative flex">
                                    <div class="relative -top-2 right-3 inline-flex h-3 w-3 rounded-full border-2 border-white bg-red-500 dark:border-gray-900"></div>
                                </div>
                            </button>
                            <!-- Dropdown menu -->
                            <div
                                id="dropdownNotification"
                                class="z-20 hidden w-full max-w-sm divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-800"
                                aria-labelledby="dropdownNotificationButton">
                                <div class="block rounded-t-lg bg-gray-50 px-4 py-2 text-center font-medium text-gray-700 dark:bg-gray-800 dark:text-white">Notifications</div>
                                <div class="divide-y divide-gray-100 dark:divide-gray-700">
                                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div class="flex-shrink-0">
                                            <img class="h-11 w-11 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                                            <div class="absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-blue-600 dark:border-gray-800">
                                                <svg class="h-3 w-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                                                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="w-full pl-3">
                                            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
                                                New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"
                                            </div>
                                            <div class="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                                        </div>
                                    </a>
                                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div class="flex-shrink-0">
                                            <img class="h-11 w-11 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Joseph image" />
                                            <div class="absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-900 dark:border-gray-800">
                                                <svg class="h-3 w-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="w-full pl-3">
                                            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
                                                <span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>
                                                and
                                                <span class="font-medium text-gray-900 dark:text-white">5 others</span>
                                                started following you.
                                            </div>
                                            <div class="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
                                        </div>
                                    </a>
                                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div class="flex-shrink-0">
                                            <img class="h-11 w-11 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                            <div class="absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-red-600 dark:border-gray-800">
                                                <svg class="h-3 w-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="w-full pl-3">
                                            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
                                                <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                                                and <span class="font-medium text-gray-900 dark:text-white">141 others</span>
                                                love your story. See it and view more stories.
                                            </div>
                                            <div class="text-xs text-blue-600 dark:text-blue-500">44 minutes ago</div>
                                        </div>
                                    </a>
                                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div class="flex-shrink-0">
                                            <img class="h-11 w-11 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Leslie image" />
                                            <div class="absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-800">
                                                <svg class="h-3 w-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="w-full pl-3">
                                            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
                                                <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span>
                                                mentioned you in a comment:
                                                <span class="font-medium text-blue-500" href="#">@bonnie.green</span>
                                                what do you say?
                                            </div>
                                            <div class="text-xs text-blue-600 dark:text-blue-500">1 hour ago</div>
                                        </div>
                                    </a>
                                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div class="flex-shrink-0">
                                            <img class="h-11 w-11 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Robert image" />
                                            <div class="absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-800">
                                                <svg class="h-3 w-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="w-full pl-3">
                                            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
                                                <span class="font-semibold text-gray-900 dark:text-white">Robert Brown</span>
                                                posted a new video: Glassmorphism - learn how to implement the new design trend.
                                            </div>
                                            <div class="text-xs text-blue-600 dark:text-blue-500">3 hours ago</div>
                                        </div>
                                    </a>
                                </div>
                                <a
                                    href="#"
                                    class="block rounded-b-lg bg-gray-50 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                                    <div class="inline-flex items-center ">
                                        <svg class="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                            <path
                                                fill-rule="evenodd"
                                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        View all
                                    </div>
                                </a>
                            </div>
                        </div>

                        <button
                            type="button"
                            data-dropdown-toggle="language-dropdown"
                            class="inline-flex items-center rounded-xs text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            <svg class="h-6 w-6 rounded-full md:mr-2 ring-4 ring-green-400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
                                <path fill="#b22234" d="M0 0h7410v3900H0z" />
                                <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300" />
                                <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                                <g fill="#fff">
                                    <g id="d">
                                        <g id="c">
                                            <g id="e">
                                                <g id="b">
                                                    <path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                                                    <use xlink:href="#a" y="420" />
                                                    <use xlink:href="#a" y="840" />
                                                    <use xlink:href="#a" y="1260" />
                                                </g>
                                                <use xlink:href="#a" y="1680" />
                                            </g>
                                            <use xlink:href="#b" x="247" y="210" />
                                        </g>
                                        <use xlink:href="#c" x="494" />
                                    </g>
                                    <use xlink:href="#d" x="988" />
                                    <use xlink:href="#c" x="1976" />
                                    <use xlink:href="#e" x="2470" />
                                </g>
                            </svg>
                            <svg class="hidden h-4 w-4 md:inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <!-- Dropdown -->
                        <div class="z-50 my-4 hidden w-48 list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:bg-gray-700" id="language-dropdown">
                            <ul class="py-1" role="none">
                                <li>
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div class="inline-flex items-center">
                                            <svg class="mr-2 h-3.5 w-3.5 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                                                <g fill-rule="evenodd">
                                                    <g stroke-width="1pt">
                                                        <path
                                                            fill="#bd3d44"
                                                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                            transform="scale(3.9385)" />
                                                        <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                                                    </g>
                                                    <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                                                    <path
                                                        fill="#fff"
                                                        d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                                        transform="scale(3.9385)" />
                                                </g>
                                            </svg>
                                            English (US)
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div class="inline-flex items-center">
                                            <svg class="mr-2 h-3.5 w-3.5 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
                                                <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                                                <path d="M0 0h512v170.7H0z" />
                                                <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                                            </svg>
                                            Deutsch
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div class="inline-flex items-center">
                                            <svg class="mr-2 h-3.5 w-3.5 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">
                                                <g fill-rule="evenodd" stroke-width="1pt">
                                                    <path fill="#fff" d="M0 0h512v512H0z" />
                                                    <path fill="#009246" d="M0 0h170.7v512H0z" />
                                                    <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                                                </g>
                                            </svg>
                                            Italiano
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div class="inline-flex items-center">
                                            <svg
                                                class="mr-2 h-3.5 w-3.5 rounded-full"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                id="flag-icon-css-cn"
                                                viewBox="0 0 512 512">
                                                <defs>
                                                    <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
                                                </defs>
                                                <path fill="#de2910" d="M0 0h512v512H0z" />
                                                <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a" />
                                                <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a" />
                                                <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a" />
                                                <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a" />
                                                <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a" />
                                            </svg>
                                            中文 (繁體)
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    `
})
export class HeaderComponent {}
