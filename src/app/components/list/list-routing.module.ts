import { ListComponent } from './list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ListComponent,
    children: [
      {
        path: ':id',
        loadChildren: () => import('../detail/detail.module').then(m => m.DetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
