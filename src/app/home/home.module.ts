import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./header/header.component";

import { SharedModule } from "../shared/shared.module";
import { AboutComponent } from "./about/about.component";
import { HostsComponent } from "./hosts/hosts.component";
import { PlacesComponent } from './places/places.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    AboutComponent,
    HostsComponent,
    PlacesComponent,
    BenefitsComponent,
    FooterComponent
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule {}
