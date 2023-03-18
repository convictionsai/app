import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: "convictionsai-left-nav",
    template: `
        <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <ul class="mt-5 space-y-2">
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        <span class="ml-3">Home</span>
                    </a>
                </li>
                <li>
                    <button
                        type="button"
                        class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        aria-controls="dropdown-tasks"
                        data-collapse-toggle="dropdown-tasks">
                        <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                            <path
                                fill-rule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="flex-1 ml-3 text-left whitespace-nowrap">My Tasks</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <ul id="dropdown-tasks" class="hidden py-2 space-y-2">
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >To do</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >In progress</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >Completed</a
                            >
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                        <span class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                            6
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="ml-3">Reporting</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd"></path>
                            <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"></path>
                        </svg>
                        <span class="ml-3">Portfolios</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="ml-3">Goals</span>
                    </a>
                </li>
            </ul>
            <div class="pt-5 pl-2 mt-5 mb-4 text-sm text-gray-500 border-t border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <h3>Bergside projects</h3>
            </div>
            <ul class="pl-2 space-y-4">
                <li>
                    <a href="#" class="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:underline dark:text-white group">
                        <span class="w-4 h-4 rounded bg-primary-600"></span>
                        <span class="ml-3">Flowbite library</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:underline dark:text-white group">
                        <span class="w-4 h-4 bg-teal-400 rounded"></span>
                        <span class="ml-3">Themesberg</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:underline dark:text-white group">
                        <span class="w-4 h-4 bg-orange-300 rounded"></span>
                        <span class="ml-3">Flowbite blocks</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:underline dark:text-white group">
                        <span class="w-4 h-4 bg-purple-500 rounded"></span>
                        <span class="ml-3">Iconscale</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 dark:text-gray-200 group">
                        <svg class="w-4 h-4 rounded border border-gray-200 dark:border-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="ml-3 text-gray-500 dark:text-gray-400 hover:underline">Add new project</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="justify-center p-4 w-full bg-white dark:bg-gray-800 z-20">
            <ul class="pb-4 pl-2 mb-4 space-y-2 border-b border-gray-200 dark:border-gray-700">
                <li>
                    <a href="#" class="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group">
                        <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                            <path
                                fill-rule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="ml-2">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group">
                        <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                        </svg>
                        <span class="ml-2">Help & getting started</span>
                    </a>
                </li>
            </ul>
            <button
                id="dropdownUserNameButton"
                data-dropdown-toggle="dropdownUserName"
                class="flex justify-between items-center p-2 my-4 w-full rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-50 dark:hover-bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
                type="button">
                <span class="sr-only">Open user menu</span>
                <div class="flex items-center">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" class="mr-3 w-8 h-8 rounded-full" alt="Bonnie avatar" />
                    <div class="text-left">
                        <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Bonnie Green</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">name@company.com</div>
                    </div>
                </div>
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownUserName" class="hidden z-10 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-placement="top">
                <a href="#" class="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" class="mr-3 w-8 h-8 rounded-full" alt="Micheal avatar" />
                    <div class="text-left">
                        <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Micheal Gough</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">michael@company.com</div>
                    </div>
                </a>
                <a href="#" class="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" class="mr-3 w-8 h-8 rounded-full" alt="Roberta avatar" />
                    <div class="text-left">
                        <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Roberta Casas</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">roberta@company.com</div>
                    </div>
                </a>
            </div>
            <a href="#" class="flex items-center pl-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group">
                <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
                <span class="ml-2">Invite team members</span>
            </a>
        </div>
    `
})
export class LeftNavComponent {}
