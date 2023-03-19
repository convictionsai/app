import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "convictionsai-schedule-overview",
    standalone: true,
    imports: [CommonModule],
    template: `
        <section class="bg-white antialiased dark:bg-gray-900">
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
                <div class="mx-auto max-w-3xl text-center">
                    <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Upcoming Events</h2>
                </div>
                <div class="mt-8 lg:mt-12">
                    <ul class="flex flex-wrap justify-center text-center text-gray-500 dark:text-gray-400" id="myTab" role="tablist">
                        <li class="mr-3 mb-3 lg:mb-0" role="presentation">
                            <button class="inline-block rounded-full px-4 py-3 text-base font-normal" id="day1-tab" type="button" role="tab" aria-controls="day1" aria-selected="false">
                                <span class="font-semibold">Day 1:</span> Wednesday, Oct 12th
                            </button>
                        </li>
                        <li class="mr-3 mb-3 lg:mb-0" role="presentation">
                            <button class="inline-block rounded-full px-4 py-3 text-base font-normal" id="day2-tab" type="button" role="tab" aria-controls="day2" aria-selected="false">
                                <span class="font-semibold">Day 2:</span> Thursday, Oct 13th
                            </button>
                        </li>
                        <li role="presentation">
                            <button class="inline-block rounded-full px-4 py-3 text-base font-normal" id="day3-tab" type="button" role="tab" aria-controls="day3" aria-selected="false">
                                <span class="font-semibold">Day 3:</span> Friday, Oct 14th
                            </button>
                        </li>
                    </ul>
                </div>

                <div id="myTabContent" class="mt-8 lg:mt-12">
                    <!-- Tab one -->
                    <div class="hidden" id="day1" role="tabpanel" aria-labelledby="day1-tab">
                        <div class="mx-auto grid max-w-5xl grid-cols-1 rounded-lg border border-gray-100 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800 sm:grid-cols-2">
                            <div class="space-y-4 pb-5 sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    9:00 - 10:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Opening remarks</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Jese Leos</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">CEO & Co Founder Bergside LLC</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pb-5 dark:border-gray-700 sm:border-l sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    10:00 - 11:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Women in Streaming Media Networking</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/leslie-livingston.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Leslie Livingston</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">CEO & Co Founder Meta</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-t sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    11:00 - 12:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Bergside LLC: Controlling the video traffic flows</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Lana Byrd</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Video Engineer</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-l sm:border-t sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    13:00 - 14:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">The importance of platform optimisation in times of expensive ads</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Joseph McFall</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Engineer at Google</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-t sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    12:00 - 13:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Coffee & networking</a>
                                </h4>
                                <div>
                                    <p class="text-base font-medium text-gray-500 dark:text-gray-400">Sponsors:</p>
                                    <div class="mt-2 flex max-w-xs flex-wrap items-center gap-x-6 gap-y-4">
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/slack-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/salesforce-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/google-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/sap-grayscale.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-l sm:border-t sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    14:00 - 15:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Flowbite - An Open Framework for Forensic Watermarking</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Micheal Gough</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">CTO at Flowbite</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Karen Nelson</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">React developer at Flowbite</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-t sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    15:00 - 16:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Updates from the Open Source Multimedia community</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Robert Brown</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Videolan</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-l sm:border-t sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    14:00 - 15:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Exploring the balance between customer acquisition and retention</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Helene Engels</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Senior VP Amazon</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Roberta Casas</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Head Designer Amazon</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-t sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    17:00 - 18:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Scaling your brand from €0 to multimillion euros</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Thomas Lean</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">COO Salesforce</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Neil Sims</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">CTO Salesforce</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Bonnie Green</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Python Developer</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-l sm:border-t sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    18:00 - 20:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Drinks & networking</a>
                                </h4>
                                <div>
                                    <p class="text-base font-medium text-gray-500 dark:text-gray-400">Sponsors:</p>
                                    <div class="mt-2 flex max-w-xs flex-wrap items-center gap-x-6 gap-y-4">
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/google-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/sap-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/slack-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/salesforce-grayscale.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Tab two -->
                    <div class="hidden" id="day2" role="tabpanel" aria-labelledby="day2-tab">
                        <div class="mx-auto grid max-w-5xl grid-cols-1 rounded-lg border border-gray-100 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800 sm:grid-cols-2">
                            <div class="space-y-4 pb-5 sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    18:00 - 20:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Drinks & networking</a>
                                </h4>
                                <div>
                                    <p class="text-base font-medium text-gray-500 dark:text-gray-400">Sponsors:</p>
                                    <div class="mt-2 flex max-w-xs flex-wrap items-center gap-x-6 gap-y-4">
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/google-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/sap-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/slack-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/salesforce-grayscale.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pb-5 dark:border-gray-700 sm:border-l sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    10:00 - 11:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Women in Streaming Media Networking</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/leslie-livingston.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Leslie Livingston</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">CEO & Co Founder Meta</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-t sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    14:00 - 15:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Flowbite - An Open Framework for Forensic Watermarking</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Micheal Gough</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">CTO at Flowbite</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Karen Nelson</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">React developer at Flowbite</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-l sm:border-t sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    13:00 - 14:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">The importance of platform optimisation in times of expensive ads</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Joseph McFall</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Engineer at Google</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-t sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    12:00 - 13:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Coffee & networking</a>
                                </h4>
                                <div>
                                    <p class="text-base font-medium text-gray-500 dark:text-gray-400">Sponsors:</p>
                                    <div class="mt-2 flex max-w-xs flex-wrap items-center gap-x-6 gap-y-4">
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/slack-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/google-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/sap-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/salesforce-grayscale.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-l sm:border-t sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    14:00 - 15:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Exploring the balance between customer acquisition and retention</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Helene Engels</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Senior VP Amazon</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Roberta Casas</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Head Designer Amazon</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-t sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    15:00 - 16:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Updates from the Open Source Multimedia community</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Robert Brown</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Videolan</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-l sm:border-t sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    11:00 - 12:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Bergside LLC: Controlling the video traffic flows</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Lana Byrd</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Video Engineer</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-t sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    17:00 - 18:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Scaling your brand from €0 to multimillion euros</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Thomas Lean</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">COO Salesforce</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Neil Sims</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">CTO Salesforce</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Bonnie Green</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Python Developer</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-l sm:border-t sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    9:00 - 10:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline"><a href="#" class="hover:underline">Opening remarks</a></a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Jese Leos</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">CEO & Co Founder Bergside LLC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Tab three -->
                    <div class="hidden" id="day3" role="tabpanel" aria-labelledby="day3-tab">
                        <div class="mx-auto grid max-w-5xl grid-cols-1 rounded-lg border border-gray-100 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800 sm:grid-cols-2">
                            <div class="space-y-4 pb-5 sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    10:00 - 11:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline"><a href="#" class="hover:underline">Women in Streaming Media Networking</a></a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/leslie-livingston.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Leslie Livingston</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">CEO & Co Founder Meta</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pb-5 dark:border-gray-700 sm:border-l sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    9:00 - 10:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Opening remarks</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Jese Leos</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">CEO & Co Founder Bergside LLC</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-t sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    11:00 - 12:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Bergside LLC: Controlling the video traffic flows</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Lana Byrd</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Video Engineer</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-l sm:border-t sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    13:00 - 14:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">The importance of platform optimisation in times of expensive ads</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Joseph McFall</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Engineer at Google</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-t sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    14:00 - 15:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Flowbite - An Open Framework for Forensic Watermarking</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Micheal Gough</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">CTO at Flowbite</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Karen Nelson</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">React developer at Flowbite</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-l sm:border-t sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    12:00 - 13:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Coffee & networking</a>
                                </h4>
                                <div>
                                    <p class="text-base font-medium text-gray-500 dark:text-gray-400">Sponsors:</p>
                                    <div class="mt-2 flex max-w-xs flex-wrap items-center gap-x-6 gap-y-4">
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/google-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/sap-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/slack-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/salesforce-grayscale.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-t sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    15:00 - 16:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Updates from the Open Source Multimedia community</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Robert Brown</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Videolan</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-l sm:border-t sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    14:00 - 15:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Exploring the balance between customer acquisition and retention</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Helene Engels</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Senior VP Amazon</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Roberta Casas</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Head Designer Amazon</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-t sm:pr-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    17:00 - 18:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Scaling your brand from €0 to multimillion euros</a>
                                </h4>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Thomas Lean</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">COO Salesforce</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Neil Sims</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">CTO Salesforce</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="" />
                                    <div>
                                        <p class="text-lg font-medium leading-tight text-gray-900 dark:text-white">Bonnie Green</p>
                                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Python Developer</p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 border-gray-200 pt-5 pb-5 dark:border-gray-700 sm:border-l sm:border-t sm:pl-5">
                                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                    <svg aria-hidden="true" class="mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    18:00 - 20:00
                                </span>
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white sm:text-xl">
                                    <a href="#" class="hover:underline">Drinks & networking</a>
                                </h4>
                                <div>
                                    <p class="text-base font-medium text-gray-500 dark:text-gray-400">Sponsors:</p>
                                    <div class="mt-2 flex max-w-xs flex-wrap items-center gap-x-6 gap-y-4">
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/google-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/sap-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft-grayscale.svg" alt="" />
                                        <img class="h-5 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/slack-grayscale.svg" alt="" />
                                        <img class="h-7 w-auto object-contain" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/salesforce-grayscale.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-8 text-center">
                    <a href="#" title="" class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Buy tickets
                        <svg aria-hidden="true" class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    `
})
export class ScheduleOverviewComponent {}
