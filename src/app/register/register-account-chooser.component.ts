import { Component } from "@angular/core";

@Component({
    selector: "convictionsai-register-account-chooser",
    template: `
        <div class="lg:flex">
            <div class="hidden w-full max-w-md bg-primary-600 p-12 lg:block lg:h-screen">
                <div class="mb-8 flex items-center space-x-4">
                    <a href="#" class="flex items-center text-2xl font-semibold text-white">
                        <img class="mr-2 h-8 w-8" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" />
                        Flowbite
                    </a>
                    <a href="#" class="inline-flex items-center text-sm font-medium text-primary-100 hover:text-white">
                        <svg class="mr-1 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        Go back
                    </a>
                </div>
                <div class="block rounded-lg bg-primary-500 p-8 text-white">
                    <h2 class="mb-1 text-2xl font-semibold">Your selected plan</h2>
                    <p class="mb-4 font-light text-primary-100 sm:text-lg">30-day free trial</p>
                    <!-- List -->
                    <ul role="list" class="space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="h-5 w-5 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Individual configuration</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="h-5 w-5 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>No setup, or hidden fees</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="h-5 w-5 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Team size: <span class="font-semibold">1 developer</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="h-5 w-5 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Premium support: <span class="font-semibold">6 months</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="h-5 w-5 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Free updates: <span class="font-semibold">6 months</span></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mx-auto flex items-center px-4 md:w-[42rem] md:px-8 xl:px-0">
                <div class="w-full">
                    <div class="mb-8 flex items-center justify-center space-x-4 lg:hidden">
                        <a href="#" class="flex items-center text-2xl font-semibold">
                            <img class="mr-2 h-8 w-8" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" />
                            <span class="text-gray-900 dark:text-white">Flowbite</span>
                        </a>
                    </div>
                    <ol class="mb-6 flex items-center text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base lg:mb-12">
                        <li
                            class="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-12 after:border-b after:border-gray-200 after:content-[''] dark:after:border-gray-700 sm:after:inline-block xl:after:mx-10">
                            <div class="flex items-center after:mx-2 after:font-light after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:block sm:after:hidden">
                                <div class="mr-2 sm:mx-auto sm:mb-2">1</div>
                                Personal <span class="hidden sm:inline-flex">Info</span>
                            </div>
                        </li>
                        <li
                            class="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-12 after:border-b after:border-gray-200 after:content-[''] dark:after:border-gray-700 sm:after:inline-block xl:after:mx-10">
                            <div class="flex items-center after:mx-2 after:font-light after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:block sm:after:hidden">
                                <div class="mr-2 sm:mx-auto sm:mb-2">2</div>
                                Account <span class="hidden sm:inline-flex">Info</span>
                            </div>
                        </li>
                        <li class="flex items-center sm:block">
                            <div class="mr-2 sm:mx-auto sm:mb-2">3</div>
                            Confirmation
                        </li>
                    </ol>
                    <h1 class="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:mb-6">Tell us about yourself</h1>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">What is your profession?</p>
                    <ul class="mb-6 space-y-4 sm:space-y-6">
                        <li>
                            <input type="radio" id="designer" name="profession" value="designer" class="peer hidden" required />
                            <label
                                for="designer"
                                class="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500">
                                <svg class="mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="w-full">I’m a Designer</span>
                                <svg class="ml-3 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="developer" name="profession" value="developer" class="peer hidden" />
                            <label
                                for="developer"
                                class="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500">
                                <svg class="mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="w-full">I’m a Developer</span>
                                <svg class="ml-3 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </label>
                        </li>
                    </ul>
                    <button
                        class="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:py-3.5">
                        Next: Account Info
                    </button>
                    <p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>.
                    </p>
                </div>
            </div>
        </div>
    `
})
export class RegisterAccountChooserComponent {}