import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { ApiClient } from "../shared/api/api-client";

@Injectable({
    providedIn: "root"
})
export class SearchService extends ApiClient {
    public constructor(public override readonly httpClient: HttpClient) {
        super(httpClient, environment.services.api);
    }

    public search(prompt: string): Observable<any> {
        return this._post(`/search/qa`, {
            prompt
        }).pipe(map(response => response.body));
    }
}
