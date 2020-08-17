import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ShrinkUrlComponent } from './components/shrink-url/shrink-url.component';
import { ResolveShortUrlComponent } from './components/resolve-short-url/resolve-short-url.component';

const routes: Routes = [
  { path: 'list', component: ListViewComponent },
  { path: 'shrink_url', component: ShrinkUrlComponent },
  { path: 'resolve_short_url', component: ResolveShortUrlComponent },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
