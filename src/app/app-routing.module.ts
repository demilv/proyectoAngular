import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `form`, loadChildren: () =>
      import('./components/form/form.module').then(m => m.FormModule)
  },
  {
    path: `list`, loadChildren: () =>
      import('./components/list/list.module').then(m => m.ListModule)
  },
  {
    path: `listchosen/:id`, loadChildren: () =>
      import('./components/detail/detail.module').then(m => m.DetailModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
