import { Component } from "@angular/core";

@Component({
    selector: "convictionsai-content",
    template: `
        <main class="flex">
            <div class="flex gap-6 justify-between">
                <aside class="hidden relative ml-auto xl:block" aria-labelledby="sidebar-label">
                    <div class="sticky top-6 p-2 bg-gray-50 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                        <button
                            data-tooltip-target="share-twitter"
                            class="flex items-center p-2 mb-2 text-sm font-medium text-center text-gray-500 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            type="button">
                            <svg class="w-5 h-5" aria-hidden="true" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.03168 15.0005C11.0694 15.0005 14.3718 9.99823 14.3718 5.66031C14.3718 5.51823 14.3718 5.37679 14.3622 5.23599C15.0047 4.77129 15.5593 4.19591 16 3.53679C15.4009 3.80239 14.7654 3.97649 14.1146 4.05327C14.7999 3.64306 15.3128 2.99779 15.5578 2.23759C14.9134 2.61999 14.2084 2.88947 13.4733 3.03439C12.9783 2.5081 12.3237 2.15961 11.6108 2.04284C10.8978 1.92607 10.1663 2.04753 9.52931 2.38842C8.89234 2.72931 8.38548 3.27064 8.08716 3.92862C7.78884 4.5866 7.71569 5.32456 7.87904 6.02831C6.57393 5.96284 5.29717 5.62366 4.13164 5.03279C2.9661 4.44192 1.93784 3.61256 1.1136 2.59855C0.693819 3.32121 0.565248 4.1767 0.754066 4.99083C0.942885 5.80496 1.43489 6.51652 2.12992 6.98063C1.60749 6.96532 1.09643 6.82438 0.64 6.56975V6.61135C0.640207 7.36925 0.902567 8.10374 1.38258 8.69026C1.86259 9.27677 2.53071 9.67919 3.2736 9.82927C2.79032 9.96109 2.28325 9.98036 1.79136 9.88559C2.00121 10.5378 2.40962 11.1081 2.95949 11.5169C3.50937 11.9256 4.17322 12.1523 4.85824 12.1653C4.17763 12.7003 3.39821 13.0958 2.56458 13.3293C1.73096 13.5627 0.859476 13.6296 0 13.5259C1.50122 14.4893 3.24795 15.0002 5.03168 14.9979"
                                    fill="#1DA1F2" />
                            </svg>
                        </button>
                        <button
                            data-tooltip-target="share-facebook"
                            class="flex items-center p-2 mb-2 text-sm font-medium text-center text-gray-500 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            type="button">
                            <svg class="w-5 h-5" aria-hidden="true" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M16 8.4436C16 4.02532 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02532 0 8.4436C0 12.4366 2.92547 15.7463 6.75 16.3464V10.7561H4.71875V8.4436H6.75V6.6811C6.75 4.6761 7.94438 3.5686 9.77172 3.5686C10.6467 3.5686 11.5625 3.72485 11.5625 3.72485V5.6936H10.5538C9.56 5.6936 9.25 6.31032 9.25 6.9436V8.4436H11.4688L11.1141 10.7561H9.25V16.3464C13.0745 15.7463 16 12.4366 16 8.4436Z"
                                        fill="#1877F2" />
                                    <path
                                        d="M11.1141 10.7561L11.4688 8.4436H9.25V6.9436C9.25 6.31095 9.56 5.6936 10.5538 5.6936H11.5625V3.72485C11.5625 3.72485 10.647 3.5686 9.77172 3.5686C7.94438 3.5686 6.75 4.6761 6.75 6.6811V8.4436H4.71875V10.7561H6.75V16.3464C7.5783 16.476 8.4217 16.476 9.25 16.3464V10.7561H11.1141Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_13664_80011"><rect width="16" height="16" fill="white" transform="translate(0 0.443604)" /></clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button
                            data-tooltip-target="share-reddit"
                            class="flex items-center p-2 mb-2 text-sm font-medium text-center text-gray-500 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            type="button">
                            <svg class="w-5 h-5" aria-hidden="true" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M8 16.4436C12.4183 16.4436 16 12.8619 16 8.4436C16 4.02533 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02533 0 8.4436C0 12.8619 3.58172 16.4436 8 16.4436Z"
                                        fill="#FF4500" />
                                    <path
                                        d="M13.3335 8.44363C13.3335 7.79801 12.8095 7.27404 12.1639 7.27404C11.8458 7.27404 11.5651 7.39567 11.3592 7.60152C10.5639 7.03076 9.45982 6.65649 8.24344 6.60971L8.77677 4.11146L10.5078 4.47638C10.5265 4.91614 10.8914 5.2717 11.3405 5.2717C11.799 5.2717 12.1733 4.89743 12.1733 4.43895C12.1733 3.98047 11.799 3.6062 11.3405 3.6062C11.013 3.6062 10.7323 3.79334 10.6013 4.07404L8.66449 3.66234C8.60835 3.65299 8.55221 3.66234 8.50543 3.69041C8.45865 3.71848 8.43058 3.76527 8.41186 3.82141L7.82239 6.60971C6.57794 6.64714 5.46449 7.01205 4.65982 7.60152C4.45397 7.40503 4.16391 7.27404 3.85514 7.27404C3.20952 7.27404 2.68555 7.79801 2.68555 8.44363C2.68555 8.92082 2.96625 9.32316 3.37794 9.5103C3.35923 9.62258 3.34987 9.74421 3.34987 9.86585C3.34987 11.6623 5.43642 13.1126 8.01888 13.1126C10.6013 13.1126 12.6879 11.6623 12.6879 9.86585C12.6879 9.74421 12.6785 9.63193 12.6598 9.51965C13.0434 9.33252 13.3335 8.92082 13.3335 8.44363ZM5.3335 9.27638C5.3335 8.8179 5.70777 8.44363 6.16625 8.44363C6.62473 8.44363 6.999 8.8179 6.999 9.27638C6.999 9.73486 6.62473 10.1091 6.16625 10.1091C5.70777 10.1091 5.3335 9.73486 5.3335 9.27638ZM9.98379 11.4752C9.41303 12.046 8.32765 12.0834 8.00952 12.0834C7.69139 12.0834 6.59666 12.0366 6.03525 11.4752C5.95104 11.391 5.95104 11.2506 6.03525 11.1664C6.11946 11.0822 6.25982 11.0822 6.34403 11.1664C6.69958 11.522 7.46683 11.653 8.01888 11.653C8.57093 11.653 9.32882 11.522 9.69373 11.1664C9.77794 11.0822 9.9183 11.0822 10.0025 11.1664C10.068 11.26 10.068 11.391 9.98379 11.4752ZM9.83408 10.1091C9.37561 10.1091 9.00134 9.73486 9.00134 9.27638C9.00134 8.8179 9.37561 8.44363 9.83408 8.44363C10.2926 8.44363 10.6668 8.8179 10.6668 9.27638C10.6668 9.73486 10.2926 10.1091 9.83408 10.1091Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_13664_80014"><rect width="16" height="16" fill="white" transform="translate(0 0.443604)" /></clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button
                            data-tooltip-target="share-linkedin"
                            class="flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            type="button">
                            <svg class="w-5 h-5" aria-hidden="true" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M14.8189 0.443604H1.18111C0.867861 0.443604 0.567441 0.568042 0.34594 0.789543C0.124438 1.01104 0 1.31146 0 1.62471V15.2625C0 15.5757 0.124438 15.8762 0.34594 16.0977C0.567441 16.3192 0.867861 16.4436 1.18111 16.4436H14.8189C15.1321 16.4436 15.4326 16.3192 15.6541 16.0977C15.8756 15.8762 16 15.5757 16 15.2625V1.62471C16 1.31146 15.8756 1.01104 15.6541 0.789543C15.4326 0.568042 15.1321 0.443604 14.8189 0.443604ZM4.76889 14.0736H2.36333V6.43249H4.76889V14.0736ZM3.56445 5.3736C3.29158 5.37207 3.02528 5.28973 2.79916 5.137C2.57304 4.98426 2.39723 4.76796 2.29392 4.5154C2.19061 4.26284 2.16443 3.98533 2.21869 3.71791C2.27294 3.45048 2.4052 3.20512 2.59877 3.01279C2.79234 2.82046 3.03854 2.68978 3.30631 2.63724C3.57408 2.58471 3.85141 2.61267 4.1033 2.71759C4.35519 2.82252 4.57036 2.99971 4.72164 3.22681C4.87293 3.45391 4.95355 3.72073 4.95333 3.9936C4.95591 4.17629 4.92167 4.35763 4.85267 4.52681C4.78368 4.69598 4.68132 4.84954 4.55171 4.97831C4.42211 5.10709 4.2679 5.20846 4.09828 5.27637C3.92867 5.34428 3.74711 5.37735 3.56445 5.3736ZM13.6356 14.0803H11.2311V9.90583C11.2311 8.67472 10.7078 8.29472 10.0322 8.29472C9.31889 8.29472 8.61889 8.83249 8.61889 9.93694V14.0803H6.21333V6.43805H8.52667V7.49694H8.55778C8.79 7.02694 9.60333 6.2236 10.8444 6.2236C12.1867 6.2236 13.6367 7.02027 13.6367 9.3536L13.6356 14.0803Z"
                                        fill="#0A66C2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_13664_80017"><rect width="16" height="16" fill="white" transform="translate(0 0.443604)" /></clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </aside>
                <div
                    id="share-twitter"
                    role="tooltip"
                    class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                    Share on Twitter
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div
                    id="share-facebook"
                    role="tooltip"
                    class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                    Share on Facebook
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div
                    id="share-reddit"
                    role="tooltip"
                    class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                    Share on Reddit
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div
                    id="share-linkedin"
                    role="tooltip"
                    class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                    Share on LinkedIn
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <!-- article content -->
                <article class="flex flex-col gap-3 flex-1 format format-sm sm:format-base lg:format-lg format-blue">
                    <div class="">
                        <header class="not-format flex flex-col gap-4">
                            <convictionsai-breadcrumbs
                                [breadcrumbs]="
                                    $any([
                                        {
                                            label: 'Home',
                                            url: '/'
                                        },
                                        {
                                            label: 'Technology',
                                            url: '/'
                                        },
                                        {
                                            label: 'An AI god will emerge by 2042 and write its own bible. Will you worship it?',
                                            url: '/'
                                        }
                                    ])
                                "></convictionsai-breadcrumbs>
                            <div class="flex items-center">
                                <a
                                    href="#"
                                    class="bg-primary-100 dark:hover:bg-primary-300 text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 hover:bg-primary-200"
                                    >Technology</a
                                >
                                <a
                                    href="#"
                                    class="bg-primary-100 dark:hover:bg-primary-300 text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 hover:bg-primary-200"
                                    >Future</a
                                >
                            </div>

                            <h1 class="mb- font-extrabold leading-tight text-gray-900 text-4xl dark:text-white">An AI god will emerge by 2042 and write its own bible. Will you worship it?</h1>

                            <div class="flex justify-between items-center mb-4 py-4 border-t border-b border-gray-200 dark:border-gray-700">
                                <div class="mr-4 text-sm text-gray-400">
                                    <address class="inline not-italic">
                                        Posted by <a rel="author" class="text-purple-600 font-bold no-underline dark:text-white hover:underline" href="#">Matthew Davis</a>
                                    </address>
                                    in <a href="#" class="text-purple-600 no-underline dark:text-white hover:underline">Technology</a>
                                    <span> on <time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022 at 4:52PM PDT</time></span>
                                </div>
                                <a href="#comments" class="flex items-center text-sm font-medium shrink-0 text-primary-600 dark:text-primary-500 hover:underline">
                                    <svg class="mr-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    4 Comments
                                </a>
                            </div>
                        </header>
                        <p>
                            In the next 25 years, AI will evolve to the point where it will know more on an intellectual level than any human. In the next 50 or 100 years, an AI might know more than
                            the entire population of the planet put together. At that point, there are serious questions to ask about whether this AI — which could design and program additional AI
                            programs all on its own, read data from an almost infinite number of data sources, and control almost every connected device on the planet — will somehow rise in status to
                            become more like a god, something that can write its own bible and draw humans to worship it.
                        </p>
                        <p>
                            Recently, reports surfaced that a controversy-plagued engineer who once worked at Uber has started a new religion. Anthony Levandowski filed paperwork for a nonprofit
                            religious organization called The Way of the Future. Its mission: “To develop and promote the realization of a Godhead based on artificial intelligence and through
                            understanding and worship of the Godhead contribute to the betterment of society.”
                        </p>
                    </div>
                    <div class="border-t my-4"></div>

                    <convictionsai-comment></convictionsai-comment>
                    <convictionsai-comments></convictionsai-comments>

                    <aside aria-label="Related articles" class="p-4 rounded-lg bg-gray-100">
                        <div class="">
                            <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Read Next</h2>
                            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                <article>
                                    <a href="#">
                                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-1.jpg" class="mb-5 w-full max-w-full rounded-lg" alt="Image 1" />
                                    </a>
                                    <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                        <a href="#">Flowbite enables IT to automate Apple device configuration</a>
                                    </h2>
                                    <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"> Read more </a>
                                </article>
                                <article>
                                    <a href="#">
                                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-2.jpg" class="mb-5 w-full max-w-full rounded-lg" alt="Image 2" />
                                    </a>
                                    <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                        <a href="#">How AI is transforming your smartphone</a>
                                    </h2>
                                    <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"> Read more </a>
                                </article>
                                <article>
                                    <a href="#">
                                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-3.jpg" class="mb-5 w-full max-w-full rounded-lg" alt="Image 3" />
                                    </a>
                                    <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                        <a href="#">Android, ChromeOS, and the future of app discovery</a>
                                    </h2>
                                    <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"> Read more </a>
                                </article>
                                <article>
                                    <a href="#">
                                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-4.jpg" class="mb-5 w-full max-w-full rounded-lg" alt="Image 4" />
                                    </a>
                                    <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                        <a href="#">What Google collaboration app offers remote teams</a>
                                    </h2>
                                    <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"> Read more </a>
                                </article>
                                <article>
                                    <a href="#">
                                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-5.jpg" class="mb-5 w-full max-w-full rounded-lg" alt="Image 5" />
                                    </a>
                                    <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                        <a href="#">Collaboration app spending grows in the face of crisis</a>
                                    </h2>
                                    <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"> Read more </a>
                                </article>
                                <article>
                                    <a href="#">
                                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-6.jpg" class="mb-5 w-full max-w-full rounded-lg" alt="Image 6" />
                                    </a>
                                    <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                        <a href="#">For developers, too many meetings, too little 'focus' time</a>
                                    </h2>
                                    <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"> Read more </a>
                                </article>
                            </div>
                        </div>
                    </aside>
                </article>

                <!-- sidebar for news -->
                <aside class="w-[350px]" aria-labelledby="sidebar-label">
                    <h3 id="sidebar-label" class="sr-only">Sidebar</h3>
                    <div
                        class="p-5 mb-6 font-medium text-gray-500 bg-white rounded-lg border border-gray-200 divide-y divide-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:divide-gray-700">
                        <h4 class="mb-4 text-sm font-bold text-gray-900 uppercase dark:text-white">Latest news</h4>
                        <div class="flex items-center py-4">
                            <a href="#" class="shrink-0">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png" class="mr-4 w-12 max-w-full h-12 rounded-lg" alt="Image 1" />
                            </a>
                            <a href="#">
                                <h5 class="font-semibold leading-tight text-gray-900 dark:text-white hover:underline">SaaS can help speed up Cybersecurity projects</h5>
                            </a>
                        </div>
                        <div class="flex items-center py-4">
                            <a href="#" class="shrink-0">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png" class="mr-4 w-12 max-w-full h-12 rounded-lg" alt="Image 2" />
                            </a>
                            <a href="#">
                                <h5 class="font-semibold leading-tight text-gray-900 dark:text-white hover:underline">Crunching large datasets made fast: Flowbite Library</h5>
                            </a>
                        </div>
                        <div class="flex items-center py-4">
                            <a href="#" class="shrink-0">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png" class="mr-4 w-12 max-w-full h-12 rounded-lg" alt="Image 2" />
                            </a>
                            <a href="#">
                                <h5 class="font-semibold leading-tight text-gray-900 dark:text-white hover:underline">Here’s how to make a react app with Flowbite Blocks</h5>
                            </a>
                        </div>
                        <div class="flex items-center py-4">
                            <a href="#" class="shrink-0">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png" class="mr-4 w-12 max-w-full h-12 rounded-lg" alt="Image 3" />
                            </a>
                            <a href="#">
                                <h5 class="font-semibold leading-tight text-gray-900 dark:text-white hover:underline">AI meets IoT: What is the artificial intelligence</h5>
                            </a>
                        </div>
                        <div class="flex items-center pt-4">
                            <a href="#" class="shrink-0">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png" class="mr-4 w-12 max-w-full h-12 rounded-lg" alt="Image 2" />
                            </a>
                            <a href="#">
                                <h5 class="font-semibold leading-tight text-gray-900 dark:text-white hover:underline">How to create a basic application with Flowbite</h5>
                            </a>
                        </div>
                    </div>
                    <div class="p-5 mb-6 bg-white rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                        <h4 class="mb-2 font-semibold text-gray-900 dark:text-white">Get the best of Flowbite News delivered to your inbox</h4>
                        <p class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">Subscribe our newsletter for latest world news. Let's stay updated!</p>
                        <form action="#">
                            <label for="name-icon" class="sr-only">Your Email</label>
                            <div class="relative mb-4">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <input
                                    required
                                    type="text"
                                    id="name-icon"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Your name" />
                            </div>
                            <div class="relative mb-4">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </div>
                                <input
                                    required
                                    type="email"
                                    id="email-address-icon"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="name@company.com" />
                            </div>
                            <button
                                type="submit"
                                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 text-center w-full">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div
                        class="p-5 mb-6 font-medium text-gray-500 bg-white rounded-lg border border-gray-200 divide-y divide-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:divide-gray-700">
                        <h4 class="mb-4 text-sm font-bold text-gray-900 uppercase dark:text-white">Recent comments</h4>
                        <div class="py-4">
                            <p class="font-light text-gray-500 dark:text-gray-400">
                                Bonnie Green on <a href="#" class="italic font-medium text-gray-900 dark:text-white hover:underline">5 Ways SaaS Can Help Speed Up Cybersecurity Implementation</a>
                            </p>
                        </div>
                        <div class="py-4">
                            <p class="font-light text-gray-500 dark:text-gray-400">
                                Lana Byrd on
                                <a href="#" class="italic font-medium text-gray-900 dark:text-white hover:underline">Jese Leos on Crunching Large Datasets Made Fast and Easy: the Polars Library</a>
                            </p>
                        </div>
                        <div class="py-4">
                            <p class="font-light text-gray-500 dark:text-gray-400">
                                Jese Leos on <a href="#" class="italic font-medium text-gray-900 dark:text-white hover:underline">Founders, ditch your long presentations. Here’s how to make ...</a>
                            </p>
                        </div>
                        <div class="py-4">
                            <p class="font-light text-gray-500 dark:text-gray-400">
                                Thomas Lean on <a href="#" class="italic font-medium text-gray-900 dark:text-white hover:underline">AI Meets IoT: What is the Artificial Intelligence of Things</a>
                            </p>
                        </div>
                    </div>
                    <div class="p-5 mb-6 font-medium text-gray-500 bg-white rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                        <h4 class="mb-4 text-sm font-bold text-gray-900 uppercase dark:text-white">Follow me</h4>
                        <div class="flex items-center mb-4">
                            <div class="mr-3 shrink-0">
                                <img class="mt-1 w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese Leos" />
                            </div>
                            <div class="mr-3">
                                <span class="block font-medium text-gray-900 dark:text-white">Jese Leos</span>
                                <span class="text-sm font-light">546k followers</span>
                            </div>
                        </div>
                        <p class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">Hey! I'm Jese Leos. I'm a career-changer. Bootcamp grad & Dev.</p>
                        <button
                            type="button"
                            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 w-full">
                            Follow
                        </button>
                    </div>
                    <div>
                        <div class="flex justify-center items-center mb-3 w-full h-48 bg-gray-100 rounded-lg dark:bg-gray-800">
                            <svg aria-hidden="true" class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <p class="mb-2 text-sm font-light text-gray-500 dark:text-gray-400">Students and Teachers, save up to 60% on Flowbite Creative Cloud.</p>
                        <p class="text-xs font-light text-gray-400 uppercase dark:text-gray-500">Ads placeholder</p>
                    </div>
                </aside>
            </div>
        </main>
    `
})
export class ContentComponent {}
