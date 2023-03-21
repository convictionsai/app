import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CommentComponent } from "../shared/feedack/comment.component";
import { CommentsComponent } from "../shared/feedack/comments.component";
import { LeftNavComponent } from "../shared/layout/left-nav.component";
import { BreadcrumbsComponent } from "../shared/navigation/breadcrumbs.component";
import { SidebarComponent } from "../shared/navigation/sidebar.component";
import { CommunityComponent } from "./community.component";
import { ContentComponent } from "./content.component";
import { HomeComponent } from "./home.component";
import { NewsComponent } from "./news.component";
import { CalendarComponent } from "./calendar.component";
import { ForumComponent } from "./forum.component";

@NgModule({
    declarations: [CommunityComponent, ContentComponent, HomeComponent, NewsComponent, CalendarComponent, ForumComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: CommunityComponent,
                children: [
                    { path: "", component: HomeComponent },
                    { path: "news", component: NewsComponent },
                    { path: "calendar", component: CalendarComponent },
                    {
                        path: "forum/:page",
                        component: ForumComponent,
                        children: [
                            {
                                path: "",
                                component: ContentComponent
                            }
                        ]
                    },
                    {
                        path: "forum",
                        component: ForumComponent,
                        children: [
                            {
                                path: "",
                                component: ContentComponent
                            }
                        ]
                    }
                ]
            }
        ]),
        BreadcrumbsComponent,
        CommentComponent,
        CommentsComponent,
        LeftNavComponent,
        SidebarComponent
    ]
})
export class CommunityModule {}
