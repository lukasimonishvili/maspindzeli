import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
// import { EventEmitter } from 'protractor';

@Component({
  selector: "app-boolean",
  templateUrl: "./boolean.component.html",
  styleUrls: ["./boolean.component.scss"]
})
export class BooleanComponent implements OnInit {
  @Input() defaultValue: boolean = false;
  @Output() onToggleValue: EventEmitter<any> = new EventEmitter();

  value: boolean = this.defaultValue;

  constructor() {}

  ngOnInit() {}

  toggleValue() {
    this.value = !this.value;
    this.onToggleValue.emit(this.value);
  }
}
