import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PromiseComponent } from "./promise/promise.component";
import { ObservableComponent } from "./observable/observable.component";
import { ListComponent } from "./observable/list/list.component";
import { FromEventComponent } from "./observable/from-event/from-event.component";
import { IntervalComponent } from "./observable/interval/interval.component";
import { OfFromComponent } from "./observable/of-from/of-from.component";
import { ToArrayComponent } from "./observable/to-array/to-array.component";
import { CustomComponent } from "./observable/custom/custom.component";
import { MapComponent } from "./observable/map/map.component";
import { PluckComponent } from "./observable/pluck/pluck.component";
import { FilterComponent } from "./observable/filter/filter.component";
import { TapComponent } from "./observable/tap/tap.component";
import { TakeComponent } from "./observable/take/take.component";
import { DebounceComponent } from "./observable/debounce/debounce.component";
import { SubjectComponent } from "./observable/subject/subject.component";
import { ConcatMapComponent } from "./observable/concat-map/concat-map.component";
import { ConcatMap2Component } from "./observable/concat-map2/concat-map2.component";
import { SwitchMapComponent } from "./observable/switch-map/switch-map.component";


const appRoutes: Routes = [
  { path: 'promise', component: PromiseComponent},
  { path: 'observable', component: ObservableComponent, children:[
    { path: '', component: ListComponent},
    { path: 'fromEvent', component: FromEventComponent},
    { path: 'interval', component: IntervalComponent},
    { path: 'ofFrom', component: OfFromComponent},
    { path: 'toArray', component: ToArrayComponent},
    { path: 'custom', component: CustomComponent},
    { path: 'map', component: MapComponent},
    { path: 'pluck', component: PluckComponent},
    { path: 'filter', component: FilterComponent},
    { path: 'tap', component: TapComponent},
    { path: 'take', component: TakeComponent},
    { path: 'debounce', component: DebounceComponent},
    { path: 'subject', component: SubjectComponent},
    { path: 'concatmap', component: ConcatMapComponent},
    { path: 'concatmap2', component: ConcatMap2Component},
    { path: 'switchmap', component: SwitchMapComponent}
  ]},
  { path: '**', component: ObservableComponent}
];


@NgModule({
imports: [
  RouterModule.forRoot(appRoutes)
],
exports: [
  RouterModule
]
})

export class AppRoutingModule{

}
