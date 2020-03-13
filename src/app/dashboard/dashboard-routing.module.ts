import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./main/main.component";
import { DestinationComponent } from "./destination/destination.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [{ path: "", component: DestinationComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
