import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hosts",
  templateUrl: "./hosts.component.html",
  styleUrls: ["./hosts.component.scss"]
})
export class HostsComponent implements OnInit {
  slider = [
    {
      image: "",
      fullName: "Aza mahmadiani",
      rate: 2,
      desctiption: ""
    },
    {
      image: "",
      fullName: "Guram jashi",
      rate: 2,
      desctiption: ""
    },
    {
      image: "",
      fullName: "ioseb orosani",
      rate: 2,
      desctiption: ""
    },
    {
      image: "",
      fullName: "malvina izomova",
      rate: 2,
      desctiption: ""
    },
    {
      image: "",
      fullName: "Georg mkrtichyan",
      rate: 2,
      desctiption: ""
    },
    {
      image: "",
      fullName: "Shota gavasheli",
      rate: 2,
      desctiption: ""
    },
    {
      image: "",
      fullName: "kaxa baqradze",
      rate: 2,
      desctiption: ""
    },
    {
      image: "",
      fullName: "Qemal Bashirian",
      rate: 2,
      desctiption: ""
    }
  ];
  direction: "left" | "right";
  lastSlideIndex = this.slider.length - 1;
  lastVisibleSlideIndex = 2;

  constructor() {}

  ngOnInit() {}

  slideLeft() {
    this.direction = "left";
    let wrapper = document.getElementById("slideWrapper") as HTMLElement;
    let slideItem = getComputedStyle(
      document.getElementsByClassName("ms-hosts__slider__item")[1]
    );
    let elementsHidden = this.lastVisibleSlideIndex + 1;
    let slideToMoveCount = elementsHidden - 3 > 3 ? 3 : elementsHidden - 3;
    let currentPosition: any = +getComputedStyle(wrapper).left.split("px")[0];
    let movePositionPerItem: any =
      +slideItem.width.split("px")[0] + +slideItem.marginLeft.split("px")[0];
    let finalLeftStyle =
      currentPosition + movePositionPerItem * slideToMoveCount + "px";
    wrapper.style.left = finalLeftStyle;
    // console.log(finalLeftStyle);
    this.lastVisibleSlideIndex =
      this.lastVisibleSlideIndex - slideToMoveCount < 2
        ? 2
        : this.lastVisibleSlideIndex - slideToMoveCount;
  }

  slideRight() {
    this.direction = "right";
    let wrapper = document.getElementById("slideWrapper") as HTMLElement;
    let slideItem = getComputedStyle(
      document.getElementsByClassName("ms-hosts__slider__item")[1]
    );
    let slideToMoveCount =
      this.lastSlideIndex - this.lastVisibleSlideIndex > 2
        ? 3
        : this.lastSlideIndex - this.lastVisibleSlideIndex;
    let currentPosition: any = +getComputedStyle(wrapper).left.split("px")[0];
    let movePositionPerItem: any =
      +slideItem.width.split("px")[0] + +slideItem.marginLeft.split("px")[0];
    let finalLeftStyle =
      currentPosition - slideToMoveCount * movePositionPerItem + "px";
    wrapper.style.left = finalLeftStyle;
    this.lastVisibleSlideIndex += slideToMoveCount;
  }
}
