import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ReplaySubject } from "rxjs";
import { SearchService } from "./search.service";

@Component({
    selector: "convictionsai-search",
    template: `
        <div class="">
            <pre>
            {{ result$ | async | json }}
        </pre
            >
        </div>
    `
})
export class SearchComponent {
    public result$ = new ReplaySubject();

    public constructor(private readonly searchService: SearchService, private readonly route: ActivatedRoute) {
        route.queryParamMap.subscribe(paramMap => {
            this.searchService.search(paramMap.get("q")).subscribe(result => {
                console.log(result);
                this.result$.next(result);
            });
        });
    }
}
