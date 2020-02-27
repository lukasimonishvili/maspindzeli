import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  private sliderDirection: "left" | "right" = "right";
  private texts = [
    "The European languages are members of the same family. Their separate exist ence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam corrupti, optio accusantium cupiditate fugit unde voluptatem adipisci, ducimus quia sunt cumque harum porro non beatae et, illo officiis ratione nihil!"
  ];

  private images = [
    "../../../assets/img/slide-1.jpg",
    "../../../assets/img/slide-2.jpg"
  ];

  activeSlideIndex: number = 0;

  constructor() {}

  ngOnInit() {}

  slideLeft() {
    this.sliderDirection = "left";
    if (this.activeSlideIndex == 0) {
      this.activeSlideIndex = this.images.length - 1;
    } else {
      this.activeSlideIndex = this.activeSlideIndex - 1;
    }
  }

  slideRight() {
    this.sliderDirection = "right";

    if (this.activeSlideIndex == this.images.length - 1) {
      this.activeSlideIndex = 0;
    } else {
      this.activeSlideIndex = this.activeSlideIndex + 1;
    }
  }
}
