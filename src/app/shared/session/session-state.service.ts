import { Injectable } from "@angular/core";

export class SessionState<T> {
    public value: T;
}
export class CommunityState {
    public open: boolean;

    public constructor(value?: CommunityState) {
        Object.assign(this, value);
    }
}

@Injectable({
    providedIn: "root"
})
export class SessionStateService<T> {
    public state: Map<string, T>;
    public types: any = {
        community: CommunityState
    };

    public constructor() {
        const state = localStorage.getItem("state");
        console.log(state);
        if (state) {
            for (const key in this.types) {
                const type = this.types[key]();
                console.log(type);
            }
        } else {
            for (const key in this.types) {
                const type = new this.types[key]();
                console.log(type);
            }
        }
        return;

        if (state) {
            this.state = new Map(JSON.parse(state));
        } else {
            this.state = new Map();
        }
    }

    public get(key: string): T {
        const state = this.state.get(key);
        if (state) {
            return state;
        }
        return null;
    }

    public set(scope: string, key: any, value: any) {
        const state = this.state.get(scope) || new this.types[scope]({ [key]: value });
        console.log(state);
        // if(state) {
        //
        // } else{
        //  const newState = new Map<string, any>();
        // }
        //
        // state[key] = value;
        //
        // this.state = state;
        // console.log(this.state);
        // localStorage.setItem("state", JSON.stringify(this.state));
    }
}
