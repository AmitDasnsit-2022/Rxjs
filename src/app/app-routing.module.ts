import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './observables/custom/custom.component';
import { FormEventComponent } from './observables/form-event/form-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { ListComponent } from './observables/list/list.component';
import { ObservablesComponent } from './observables/observables.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes =[
  {path:'observables',component:ObservablesComponent ,children:[
    {path:'',component:ListComponent},
    {path:'form-event',component:FormEventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'of-from',component:OfFromComponent},
    {path:'to-array',component:ToArrayComponent},
    {path:'Custom',component:CustomComponent}

  ]},
  {path:'promise',component:PromiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
