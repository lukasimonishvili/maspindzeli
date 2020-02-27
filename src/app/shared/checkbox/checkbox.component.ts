import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"]
})
export class CheckboxComponent implements OnInit {
  @Input() label: string;
  @Input() checked: boolean = false;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  toggleCheck() {
    this.checked = !this.checked;

    let payload = {
      [this.label]: this.checked
    };

    this.onChange.emit(payload);
  }
}
