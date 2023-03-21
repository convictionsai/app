import { Component } from "@angular/core";

@Component({
    selector: "convictionsai-dashboard",
    template: `
        <div class="flex flex-col gap-20 p-5">
            <section class="">
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

            <div class="">
                <convictionsai-content-header-inline title="Popular Journeys"></convictionsai-content-header-inline>

                <section class="flex flex-col  dark:bg-gray-900 rounded-lg border-2 border-gray-100">
                    <div class="p-4">
                        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Laviticus for the weary</h2>
                        <div>
                            <a href="#" class="inline-flex justify-center items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                                Learn more about this journey
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="">
                        <div id="animation-carousel" class="relative py-4 px-[80px]" data-carousel="slide">
                            <div class="overflow-hidden relative h-48 rounded-lg">
                                <div class="grid hidden absolute inset-0 gap-8 transition-all duration-700 ease-linear transform lg:grid-cols-2" data-carousel-item="">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/office-work.png" class="block w-full h-full rounded-lg" alt="..." />
                                    <img
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/office.png"
                                        class="hidden w-full h-full rounded-lg lg:block"
                                        alt="..." />
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
                                    <img
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/meeting.png"
                                        class="hidden w-full h-full rounded-lg lg:block"
                                        alt="..." />
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
                                    class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white/30 bg-gray-400/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                    <span class="hidden">Previous</span>
                                </span>
                            </button>
                            <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                                <span
                                    class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white/30 bg-gray-400/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                    <span class="hidden">Next</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <dl class="flex justify-center gap-20 p-4">
                        <div class="flex flex-col justify-center items-center">
                            <dt class="mb-2 text-3xl font-extrabold md:text-4xl">73M+</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Letters</dd>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                            <dt class="mb-2 text-3xl font-extrabold md:text-4xl">100M+</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Chapters</dd>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                            <dt class="mb-2 text-3xl font-extrabold md:text-4xl">1,234</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Verses</dd>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                            <dt class="mb-2 text-3xl font-extrabold md:text-4xl">3</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Characters</dd>
                        </div>
                    </dl>
                    <div class="flex justify-center p-2">
                        <a
                            href="#"
                            class="text-white bg-green-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            Start journey
                        </a>
                    </div>
                </section>
            </div>

            <section class="bg-white dark:bg-gray-900">
                <div class="max-w-screen-xl px-4 mx-auto">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">Fundraising events</h2>
                        <p class="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                            Flowbite helps you connect with friends, family and communities of people who share your interests.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 gap-4 mt-8 xl:gap-12 md:grid-cols-2">
                        <div class="p-5 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <img class="object-cover w-full rounded-lg shadow-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-1.png" alt="" />

                            <div>
                                <div class="flex items-center justify-between gap-6">
                                    <div class="flex items-center gap-2">
                                        <span class="text-lg font-bold text-gray-900 dark:text-white"> $376,856 </span>
                                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> of 400k goal </span>
                                    </div>
                                    <span class="text-xs font-normal text-right text-gray-500 dark:text-gray-400"> 2,756 donors </span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                                    <div class="bg-primary-600 h-2.5 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>

                            <h3 class="text-lg font-bold leading-tight text-gray-900 dark:text-white">Thank you for supporting in planting trees work.</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                                Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is
                                something for everyone.
                            </p>

                            <div class="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row lg:items-center">
                                <a
                                    href="#"
                                    title=""
                                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    role="button">
                                    Donate now
                                </a>

                                <a
                                    href="#"
                                    title=""
                                    class="px-5 py-2.5 text-sm justify-center font-medium text-gray-900 inline-flex items-center focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    role="button">
                                    <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                    </svg>
                                    Share this Fundraiser
                                </a>
                            </div>
                        </div>

                        <div class="p-5 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <img class="object-cover w-full rounded-lg shadow-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-2.png" alt="" />

                            <div>
                                <div class="flex items-center justify-between gap-6">
                                    <div class="flex items-center gap-2">
                                        <span class="text-lg font-bold text-gray-900 dark:text-white"> $75,856 </span>
                                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> of 150k goal </span>
                                    </div>
                                    <span class="text-xs font-normal text-right text-gray-500 dark:text-gray-400"> 568 donors </span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                                    <div class="bg-primary-600 h-2.5 rounded-full" style="width: 50%"></div>
                                </div>
                            </div>

                            <h3 class="text-lg font-bold leading-tight text-gray-900 dark:text-white">Thank you for supporting our lifesaving work.</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                                Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is
                                something for everyone.
                            </p>

                            <div class="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row lg:items-center">
                                <a
                                    href="#"
                                    title=""
                                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    role="button">
                                    Donate now
                                </a>

                                <a
                                    href="#"
                                    title=""
                                    class="px-5 py-2.5 text-sm justify-center font-medium text-gray-900 inline-flex items-center focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    role="button">
                                    <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                    </svg>
                                    Share this Fundraiser
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 text-center">
                        <a href="#" title="" class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                            View all fundraising events
                            <svg aria-hidden="true" class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    `
})
export class DashboardComponent {}
