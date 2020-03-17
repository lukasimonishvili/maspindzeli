import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";

import { SharedModule } from "../shared/shared.module";

import { MainComponent } from "./main/main.component";
import { DestinationComponent } from './destination/destination.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HostsComponent } from './hosts/hosts.component';
import { InfoComponent } from './info/info.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [MainComponent, DestinationComponent, ActivitiesComponent, HotelsComponent, HostsComponent, InfoComponent, HeaderComponent, FilterComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
