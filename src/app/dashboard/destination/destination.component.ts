import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-destination",
  templateUrl: "./destination.component.html",
  styleUrls: ["./destination.component.scss"]
})
export class DestinationComponent implements OnInit {
  private places: Array<any> = [
    {
      image:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/92/f3.jpg",
      title: "Svaneti",
      distance: 57,
      rate: {
        stars: 4,
        total: 74
      },
      activites: [
        "../../../assets/img/activities/dance.png",
        "../../../assets/img/activities/horse.png",
        "../../../assets/img/activities/club.png",
        "../../../assets/img/activities/ass.png"
      ]
    },
    {
      image:
        "https://img.itinari.com/page/content/original/defb860a-e1cf-49ba-bcd8-986f7aba6c1e-p.jpg?ch=DPR&dpr=1&w=994&s=96c9fb68f93673134bf1f5920a2429fc",
      title: "Racha",
      distance: 23,
      rate: {
        stars: 4,
        total: 74
      },
      activites: [
        "../../../assets/img/activities/dance.png",
        "../../../assets/img/activities/horse.png",
        "../../../assets/img/activities/club.png",
        "../../../assets/img/activities/ass.png"
      ]
    },
    {
      image:
        "https://georgiantour.com/wp-content/uploads/2016/05/georgia-and-travel-batumi.jpg",
      title: "Batumi",
      distance: 69,
      rate: {
        stars: 4,
        total: 74
      },
      activites: [
        "../../../assets/img/activities/dance.png",
        "../../../assets/img/activities/horse.png",
        "../../../assets/img/activities/club.png",
        "../../../assets/img/activities/ass.png"
      ]
    },
    {
      image:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/92/f3.jpg",
      title: "Svaneti",
      distance: 57,
      rate: {
        stars: 4,
        total: 74
      },
      activites: [
        "../../../assets/img/activities/dance.png",
        "../../../assets/img/activities/horse.png",
        "../../../assets/img/activities/club.png",
        "../../../assets/img/activities/ass.png"
      ]
    },
    {
      image:
        "https://img.itinari.com/page/content/original/defb860a-e1cf-49ba-bcd8-986f7aba6c1e-p.jpg?ch=DPR&dpr=1&w=994&s=96c9fb68f93673134bf1f5920a2429fc",
      title: "Racha",
      distance: 23,
      rate: {
        stars: 4,
        total: 74
      },
      activites: [
        "../../../assets/img/activities/dance.png",
        "../../../assets/img/activities/horse.png",
        "../../../assets/img/activities/club.png",
        "../../../assets/img/activities/ass.png"
      ]
    },
    {
      image:
        "https://georgiantour.com/wp-content/uploads/2016/05/georgia-and-travel-batumi.jpg",
      title: "Batumi",
      distance: 69,
      rate: {
        stars: 4,
        total: 74
      },
      activites: [
        "../../../assets/img/activities/dance.png",
        "../../../assets/img/activities/horse.png",
        "../../../assets/img/activities/club.png",
        "../../../assets/img/activities/ass.png"
      ]
    },
    {
      image:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/92/f3.jpg",
      title: "Svaneti",
      distance: 57,
      rate: {
        stars: 4,
        total: 74
      },
      activites: [
        "../../../assets/img/activities/dance.png",
        "../../../assets/img/activities/horse.png",
        "../../../assets/img/activities/club.png",
        "../../../assets/img/activities/ass.png"
      ]
    },
    {
      image:
        "https://img.itinari.com/page/content/original/defb860a-e1cf-49ba-bcd8-986f7aba6c1e-p.jpg?ch=DPR&dpr=1&w=994&s=96c9fb68f93673134bf1f5920a2429fc",
      title: "Racha",
      distance: 23,
      rate: {
        stars: 4,
        total: 74
      },
      activites: [
        "../../../assets/img/activities/dance.png",
        "../../../assets/img/activities/horse.png",
        "../../../assets/img/activities/club.png",
        "../../../assets/img/activities/ass.png"
      ]
    },
    {
      image:
        "https://georgiantour.com/wp-content/uploads/2016/05/georgia-and-travel-batumi.jpg",
      title: "Batumi",
      distance: 69,
      rate: {
        stars: 4,
        total: 74
      },
      activites: [
        "../../../assets/img/activities/dance.png",
        "../../../assets/img/activities/horse.png",
        "../../../assets/img/activities/club.png",
        "../../../assets/img/activities/ass.png"
      ]
    }
  ];
  counter = Array;

  constructor() {}

  ngOnInit() {}

  onSearchKeyUp(e) {
    console.log(e.target.value);
  }
}
