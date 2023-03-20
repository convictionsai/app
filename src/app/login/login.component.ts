import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication/authentication.service";

@Component({
    selector: "convictionsai-login",
    template: `
        <section class="absolute top-0 bottom-0 left-0 right-0 bg-gray-200 flex flex-col lg:flex-row items-center justify-center gap-32">
            <div class="bg-white rounded-lg shadow dark:bg-gray-800 p-8 flex-1 max-w-[600px]">
                <h1 class="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">Login to your journey</h1>

                <p class="text-sm font-light text-gray-500 dark:text-gray-300">
                    Don’t have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>.
                </p>

                <form [formGroup]="formGroup" class="mt-4 space-y-6">
                    <div class="space-y-3">
                        <a
                            class="w-full flex gap-2 items-center justify-center py-2.5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <icon name="facebook" [width]="5"></icon>
                            Login with Facebook
                        </a>
                        <a
                            class="w-full flex gap-2 items-center justify-center py-2.5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <icon name="instagram" [width]="5"></icon>
                            Login with Instagram
                        </a>
                        <a
                            class="w-full flex gap-2 items-center justify-center py-2.5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <icon name="google" [width]="5"></icon>
                            Login with Google
                        </a>
                    </div>

                    <div class="flex items-center">
                        <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                        <div class="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
                        <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    </div>

                    <div class="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input
                                autofocus
                                formControlName="email"
                                type="email"
                                name="email"
                                id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input
                                formControlName="password"
                                type="password"
                                name="password"
                                id="password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input
                                    formControlName="remember"
                                    type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>

                    <button
                        (click)="login()"
                        type="submit"
                        class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Sign in to your account
                    </button>
                </form>
            </div>
            <div class="">
                <img class="" src="assets/logo.png" />
            </div>
        </section>
    `
})
export class LoginComponent {
    public formGroup = new FormGroup({
        email: new FormControl("test@test.com", [Validators.required, Validators.email]),
        password: new FormControl("asdfasdf", [Validators.required, Validators.minLength(8)]),
        remember: new FormControl(true, [Validators.required, Validators.minLength(8)])
    });

    public constructor(private router: Router, private readonly authenticationService: AuthenticationService) {}

    public login(): void {
        this.authenticationService.login(this.formGroup.value.email, this.formGroup.value.password, this.formGroup.value.remember);
        void this.router.navigate(["/dashboard"]);
    }
}
