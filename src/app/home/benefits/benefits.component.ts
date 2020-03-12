import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-benefits",
  templateUrl: "./benefits.component.html",
  styleUrls: ["./benefits.component.scss"]
})
export class BenefitsComponent implements OnInit {
  benefits: Array<any> = [
    {
      image: "../../../assets/img/benefits/1.png",
      text: "Choose your Experience"
    },
    {
      image: "../../../assets/img/benefits/2.png",
      text: "Individualy personalized packages"
    },
    {
      image: "../../../assets/img/benefits/3.png",
      text: "Discover extraordinary Places"
    },
    {
      image: "../../../assets/img/benefits/4.png",
      text: "Personal Host for the whole trip"
    },
    {
      image: "../../../assets/img/benefits/5.png",
      text: "Best value for the money pereposition"
    },
    {
      image: "../../../assets/img/benefits/6.png",
      text: "Simple checkout options"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
