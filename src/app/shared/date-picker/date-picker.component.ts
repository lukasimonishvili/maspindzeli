import { Component, OnInit, Input, ViewChild } from "@angular/core";

@Component({
  selector: "date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"]
})
export class DatePickerComponent implements OnInit {
  @Input() placeholder: string;
  @Input() defaultValue: Date;

  constructor() {}

  ngOnInit() {}

  onDateChange() {
    console.log("i`m in");
  }
}
