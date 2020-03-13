import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { MzOutclickModule } from "mz-outclick";
import { RouterModule } from "@angular/router";

import { DpDatePickerModule } from "ng2-date-picker";
import { SelectComponent } from "./select/select.component";
import { NumberSpinerComponent } from "./number-spiner/number-spiner.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  declarations: [
    DatePickerComponent,
    SelectComponent,
    NumberSpinerComponent,
    CheckboxComponent,
    SidebarComponent
  ],
  imports: [CommonModule, DpDatePickerModule, MzOutclickModule, RouterModule],
  exports: [
    DatePickerComponent,
    SelectComponent,
    NumberSpinerComponent,
    CheckboxComponent,
    SidebarComponent
  ]
})
export class SharedModule {}
