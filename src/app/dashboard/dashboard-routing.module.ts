import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./main/main.component";
import { DestinationComponent } from "./destination/destination.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { HotelsComponent } from "./hotels/hotels.component";
import { HostsComponent } from "./hosts/hosts.component";
import { InfoComponent } from "./info/info.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", component: DestinationComponent },
      { path: "activity", component: ActivitiesComponent },
      { path: "hotels", component: HotelsComponent },
      { path: "hosts", component: HostsComponent },
      { path: "info", component: InfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
