import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CommentComponent } from "../shared/feedack/comment.component";
import { CommentsComponent } from "../shared/feedack/comments.component";
import { BreadcrumbsComponent } from "../shared/navigation/breadcrumbs.component";
import { CommunityComponent } from "./community.component";
import { ContentComponent } from "./community/content.component";

@NgModule({
    declarations: [CommunityComponent, ContentComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: CommunityComponent
            }
        ]),
        BreadcrumbsComponent,
        CommentComponent,
        CommentsComponent
    ]
})
export class CommunityModule {}
