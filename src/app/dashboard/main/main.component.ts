import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  sideBarData: Array<any> = [
    {
      image: "../../../assets/img/sidebar/destination.svg",
      name: "DESTIONATION",
      link: "/dashboard"
    },
    {
      image: "../../../assets/img/sidebar/activities.svg",
      name: "ACTIVITY",
      link: "/dashboard/activity"
    },
    {
      image: "../../../assets/img/sidebar/hotels.svg",
      name: "HOTELS",
      link: "/dashboard/hotels"
    },
    {
      image: "../../../assets/img/sidebar/hosts.svg",
      name: "YOUR HOSTS",
      link: "/dashboard/hosts"
    },
    {
      image: "../../../assets/img/sidebar/information.svg",
      name: "INFO",
      link: "/dashboard/info"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
