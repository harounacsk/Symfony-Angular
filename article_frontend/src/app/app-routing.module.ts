import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddDepotComponent } from './add-depot/add-depot.component';
import { ArticleComponent } from './article/article.component';
import { DepotComponent } from './depot/depot.component';


const routes: Routes = [
  {path:"", component: ArticleComponent},
  {path:"article", component: ArticleComponent},
  {path:"depot", component:DepotComponent},
  {path:"add_article", component: AddArticleComponent},
  {path:"add_depot", component:AddDepotComponent}
    ]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }