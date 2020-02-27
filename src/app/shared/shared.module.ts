import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { MzOutclickModule } from "mz-outclick";

import { DpDatePickerModule } from "ng2-date-picker";
import { SelectComponent } from "./select/select.component";
import { NumberSpinerComponent } from "./number-spiner/number-spiner.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";

@NgModule({
  declarations: [
    DatePickerComponent,
    SelectComponent,
    NumberSpinerComponent,
    CheckboxComponent
  ],
  imports: [CommonModule, DpDatePickerModule, MzOutclickModule],
  exports: [
    DatePickerComponent,
    SelectComponent,
    NumberSpinerComponent,
    CheckboxComponent
  ]
})
export class SharedModule {}
