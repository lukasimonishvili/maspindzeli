import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-places",
  templateUrl: "./places.component.html",
  styleUrls: ["./places.component.scss"]
})
export class PlacesComponent implements OnInit {
  places: Array<any> = [
    {
      image:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/92/f3.jpg",
      title: "Svaneti",
      country: "Georgia",
      rate: {
        stars: 4,
        total: 74
      },
      tripTypes: ["Nature", "Museums", "Historic Sites"]
    },
    {
      image:
        "https://img.itinari.com/page/content/original/defb860a-e1cf-49ba-bcd8-986f7aba6c1e-p.jpg?ch=DPR&dpr=1&w=994&s=96c9fb68f93673134bf1f5920a2429fc",
      title: "Racha",
      country: "Georgia",
      rate: {
        stars: 4,
        total: 74
      },
      tripTypes: ["Nature", "Museums", "Historic Sites"]
    },
    {
      image:
        "https://georgiantour.com/wp-content/uploads/2016/05/georgia-and-travel-batumi.jpg",
      title: "Batumi",
      country: "Georgia",
      rate: {
        stars: 4,
        total: 74
      },
      tripTypes: ["Nature", "Museums", "Historic Sites"]
    }
  ];
  counter = Array;

  constructor() {}

  ngOnInit() {}
}
