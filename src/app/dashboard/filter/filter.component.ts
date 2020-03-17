import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
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
  private tripTypes: Array<any> = [];
  private activePlaceIndex: number = 0;
  private places: Array<any> = [
    {
      name: "TBILISI",
      days: "3"
    },
    {
      name: "KAZBEGI",
      days: "2"
    },
    {
      name: "KAKHETI",
      days: "5"
    }
  ];

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
    console.log(result);
    return result;
  }

  onGuestCountChange(value) {
    return value;
    // console.log(value);
  }

  onBooleanChange(value) {
    return value;
    // console.log(value);
  }

  onUpdate() {
    console.log("update clicked");
  }

  onCheckBoxChange(value) {
    let tripTypes: Array<string> = this.tripTypes;
    let key = Object.keys(value)[0];
    let checked = value[key];

    if (checked) {
      tripTypes.push(key);
    } else {
      if (tripTypes.length) {
        let i = tripTypes.indexOf(key);
        tripTypes.splice(i, 1);
        this.tripTypes = tripTypes;
      }
    }
  }

  setActivePlace(index) {
    this.activePlaceIndex = index;
  }
}
