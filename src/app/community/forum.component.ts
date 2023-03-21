import { Component } from "@angular/core";
import { SidebarGroup, SidebarItem } from "../shared/navigation/sidebar.component";

@Component({
    selector: "convictionsai-forum",
    template: `
        <div class="flex h-full">
            <convictionsai-sidebar [groups]="sidebar"></convictionsai-sidebar>
            <div class="flex">
                <convictionsai-content></convictionsai-content>
            </div>
        </div>
    `
})
export class ForumComponent {
    public hashtags: string[] = ["prayer", "education", "youth", "world", "politics", "technology", "science", "health"];
    public sidebar: SidebarGroup[];

    public constructor() {
        this.sidebar = [];

        this.sidebar.push({
            items: [
                {
                    label: "Homepage",
                    icon: {
                        name: "home",
                        color: "fill-purple-400"
                    },
                    class: "text-green-500",
                    path: "/community/forum/overview"
                },
                {
                    label: "Trending",
                    icon: {
                        name: "trending"
                    },
                    path: "/community/forum/overview",
                    bubble: {
                        text: "10+",
                        color: "bg-purple-300"
                    }
                }
            ]
        });
        this.sidebar.push({
            label: "Channels",
            items: this.hashtags.map(hashtag => {
                return {
                    label: hashtag.charAt(0).toUpperCase() + hashtag.slice(1),
                    icon: {
                        name: "hashtag"
                    },
                    path: `/community/forum/hashtag/${hashtag}`
                };
            })
        });
    }
}
