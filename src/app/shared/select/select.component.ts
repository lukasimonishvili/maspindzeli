import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
  @Input() options: Array<any>;
  @Input() defaultValue: string;
  @Input() background: "transparent" | "white" = "white";
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  extanded: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleSelect(action?: boolean) {
    if (action === undefined) {
      this.extanded = !this.extanded;
    } else {
      this.extanded = action;
    }
  }

  onOptionClick(index: number) {
    this.defaultValue = this.options[index];
    this.extanded = false;

    this.onSelect.emit(this.defaultValue);
  }
}
