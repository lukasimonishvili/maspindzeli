import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "number-spiner",
  templateUrl: "./number-spiner.component.html",
  styleUrls: ["./number-spiner.component.scss"]
})
export class NumberSpinerComponent implements OnInit {
  @Input() defaultValue: number;
  @Input() maxValue: number = Infinity;
  @Input() minValue: number = -Infinity;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  private count = "00";

  constructor() {}

  ngOnInit() {
    if (this.defaultValue !== undefined) {
      let result: any = this.defaultValue;

      if (result < 10 && result > -1) {
        result = "0" + result;
      }

      this.count = result;
    }
  }

  plus() {
    let result: any = +this.count + 1;

    if (result <= this.maxValue) {
      this.onChange.emit(result);

      if (result < 10 && result > -1) {
        result = "0" + result;
      }

      this.count = result;
    }
  }

  minus() {
    let result: any = +this.count - 1;

    if (result >= this.minValue) {
      this.onChange.emit(result);

      if (result < 10 && result > -1) {
        result = "0" + result;
      }

      this.count = result;
    }
  }
}
