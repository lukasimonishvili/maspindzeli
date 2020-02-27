import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private currentDate: Date = new Date();
  private checkboxes: Array<string> = [
    "CULTURE",
    "OUTDOORS",
    "RELAXING",
    "ROMANTIC",
    "BEACHES",
    "HISTORIC",
    "SHOPPING",
    "WILDLIFE"
  ];
  private payload: any = {
    location: "",
    duration: {
      from: "",
      to: ""
    },
    guestCount: 0,
    tripTypes: []
  };

  constructor() {}

  ngOnInit() {}

  getPickedDates() {
    let dates = document.getElementsByClassName("dp-picker-input");
    let result = {};
    for (let i = 0; i < dates.length; i++) {
      let element = dates[i] as HTMLInputElement;
      result = {
        ...result,
        [element.placeholder.toLowerCase()]: element.value
      };
    }
    return result;
  }

  onLanguageSelect(value) {
    console.log(value);
  }

  onLocationSelect(value) {
    this.payload.location = value;
  }

  onGuestCountChange(value) {
    this.payload.guestCount = value;
  }

  onCheckBoxChange(value) {
    let tripTypes: Array<string> = this.payload.tripTypes;
    let key = Object.keys(value)[0];
    let checked = value[key];

    if (checked) {
      tripTypes.push(key);
    } else {
      if (tripTypes.length) {
        let i = tripTypes.indexOf(key);
        tripTypes.splice(i, 1);
        this.payload.tripTypes = tripTypes;
      }
    }
  }

  onFilterSubmit() {
    this.payload.duration = this.getPickedDates();
    console.log(this.payload);
  }
}
