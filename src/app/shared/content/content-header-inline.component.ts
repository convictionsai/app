import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "convictionsai-content-header-inline",
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="flex justify-between items-center border-b-2 border-purple-100 pb-4">
            <div class="">
                <h2 class="text-2xl tracking-tight font-extrabold text-gray-900">{{ title }}</h2>
                <div>
                    <a href="#" class="inline-flex justify-center items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                        Learn more about journies
                        <svg class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="">
                <a class="inline-flex justify-center items-center p-3 cursor-pointer text-base font-medium text-gray-500 bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100">
                    <svg class="mr-3 w-5 h-5" viewBox="0 0 33 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.5 0.224121C12.1 0.224121 9.34996 2.42416 8.25 6.82412C9.9 4.62408 11.825 3.79908 14.025 4.34912C15.2802 4.66288 16.1773 5.5736 17.1704 6.58152C18.7882 8.22366 20.6604 10.1241 24.75 10.1241C29.15 10.1241 31.9 7.92408 33 3.52412C31.35 5.72416 29.425 6.54916 27.225 5.99912C25.9698 5.68536 25.0727 4.77464 24.0796 3.76672C22.4618 2.12459 20.5896 0.224121 16.5 0.224121ZM8.25 10.1241C3.85004 10.1241 1.09996 12.3242 0 16.7241C1.65 14.5241 3.57496 13.6991 5.775 14.2491C7.03016 14.5629 7.92735 15.4736 8.92044 16.4815C10.5382 18.1237 12.4104 20.0241 16.5 20.0241C20.9 20.0241 23.65 17.8241 24.75 13.4241C23.1 15.6242 21.175 16.4492 18.975 15.8991C17.7198 15.5854 16.8227 14.6746 15.8296 13.6667C14.2118 12.0246 12.3396 10.1241 8.25 10.1241Z"
                            fill="url(#paint0_linear_4151_63014)" />
                        <defs>
                            <linearGradient id="paint0_linear_4151_63014" x1="-0.91663" y1="6.56015" x2="27.5845" y2="22.9931" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2298BD" />
                                <stop offset="1" stop-color="#0ED7B5" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span class="w-full">Start a new journey and join the community</span>
                    <svg class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    `
})
export class ContentHeaderInlineComponent {
    @Input() title: string;
}
