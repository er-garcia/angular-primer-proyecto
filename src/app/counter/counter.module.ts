import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/app.counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {

}
