import { Component } from "@angular/core";

@Component({
    selector: "convictionsai-dashboard",
    template: `
        <div class="flex flex-col gap-10">
            <section class="bg-green-50 rounded-xl border-2 border-gray-2 dark:bg-gray=-900">
                <div class="py-8 px-4 mx-auto">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Start your enriched journey to god today</h2>
                        <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try convictions.ai for free for 30 days. No credit card required.</p>
                        <a
                            href="#"
                            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                            >Free trial for 30 days</a
                        >
                    </div>
                </div>
            </section>

            <convictionsai-content-header-inline title="Popular Journeys"></convictionsai-content-header-inline>

            <section class="flex flex-col gap-6 bg-purple-50 dark:bg-gray-900 p-4 rounded-xl border-2 border-gray-2">
                <div class="">
                    <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white">Laviticus</h2>
                    <div>
                        <a href="#" class="inline-flex justify-center items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                            Learn more about us
                            <svg class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="">
                    <div id="animation-carousel" class="relative px-16 sm:px-24" data-carousel="slide">
                        <div class="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-80">
                            <div class="grid hidden absolute inset-0 gap-8 transition-all duration-700 ease-linear transform lg:grid-cols-2" data-carousel-item="">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/office-work.png" class="block w-full h-full rounded-lg" alt="..." />
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/office.png" class="hidden w-full h-full rounded-lg lg:block" alt="..." />
                            </div>
                            <div class="grid hidden absolute inset-0 gap-8 transition-all duration-700 ease-linear transform lg:grid-cols-2" data-carousel-item="">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/conference.png" class="block w-full h-full rounded-lg" alt="..." />
                                <img
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/girl-with-phone.png"
                                    class="hidden w-full h-full rounded-lg lg:block"
                                    alt="..." />
                            </div>
                            <div class="grid hidden absolute inset-0 gap-8 transition-all duration-700 ease-linear transform lg:grid-cols-2" data-carousel-item="">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/man-at-office.png" class="block w-full h-full rounded-lg" alt="..." />
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/meeting.png" class="hidden w-full h-full rounded-lg lg:block" alt="..." />
                            </div>
                            <div class="grid hidden absolute inset-0 gap-8 transition-all duration-700 ease-linear transform lg:grid-cols-2" data-carousel-item="">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/work-from-home.png" class="block w-full h-full rounded-lg" alt="..." />
                                <img
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/workspace.png"
                                    class="hidden w-full h-full rounded-lg lg:block"
                                    alt="..." />
                            </div>
                        </div>
                        <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                            <span
                                class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                                <span class="hidden">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                            <span
                                class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span class="hidden">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
                <dl class="flex justify-center gap-20">
                    <div class="flex flex-col justify-center items-center">
                        <dt class="mb-2 text-3xl font-extrabold md:text-4xl">73M+</dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">Letters</dd>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <dt class="mb-2 text-3xl font-extrabold md:text-4xl">100M+</dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">Chapters</dd>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <dt class="mb-2 text-3xl font-extrabold md:text-4xl">1000s</dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">Verses</dd>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <dt class="mb-2 text-3xl font-extrabold md:text-4xl">1B+</dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">Characters</dd>
                    </div>
                </dl>
            </section>
        </div>
    `
})
export class DashboardComponent {}
