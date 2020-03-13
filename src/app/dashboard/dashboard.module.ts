import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";

import { SharedModule } from "../shared/shared.module";

import { MainComponent } from "./main/main.component";
import { DestinationComponent } from './destination/destination.component';

@NgModule({
  declarations: [MainComponent, DestinationComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
