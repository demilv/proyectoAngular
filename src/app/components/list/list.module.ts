import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { DetailModule } from '../detail/detail.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule,
    DetailModule
  ]
})
export class ListModule { }
