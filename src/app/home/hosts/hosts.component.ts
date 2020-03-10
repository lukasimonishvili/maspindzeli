import { Component, OnInit } from "@angular/core";
import { SwiperService } from "../../services/swiper/swiper.service";

@Component({
  selector: "app-hosts",
  templateUrl: "./hosts.component.html",
  styleUrls: ["./hosts.component.scss"]
})
export class HostsComponent implements OnInit {
  slider = [
    {
      image:
        "https://www.biography.com/.image/t_share/MTE1ODA0OTcxMjkwNTYwMDEz/michael-jackson-pepsi-commercial-raw.jpg",
      fullName: "Aza mahmadiani",
      rate: 5,
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
    },
    {
      image:
        "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/thwFpwly6MXSufTuBgx2SAnmfGc=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/HIIZKRXVKEI6LP6NTNXEL35MFE.jpg",
      fullName: "Guram jashi",
      rate: 4,
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
    },
    {
      image:
        "https://cdn.ambebi.ge/media/__thumbs__/images/2020/01-03/lelakakulia-46344.webp",
      fullName: "ioseb orosani",
      rate: 3,
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
    },
    {
      image:
        "https://www.biography.com/.image/t_share/MTE1ODA0OTcxMjkwNTYwMDEz/michael-jackson-pepsi-commercial-raw.jpg",
      fullName: "Aza mahmadiani",
      rate: 5,
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
    },
    {
      image:
        "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/thwFpwly6MXSufTuBgx2SAnmfGc=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/HIIZKRXVKEI6LP6NTNXEL35MFE.jpg",
      fullName: "Guram jashi",
      rate: 4,
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
    },
    {
      image:
        "https://cdn.ambebi.ge/media/__thumbs__/images/2020/01-03/lelakakulia-46344.webp",
      fullName: "ioseb orosani",
      rate: 3,
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
    },
    {
      image:
        "https://www.biography.com/.image/t_share/MTE1ODA0OTcxMjkwNTYwMDEz/michael-jackson-pepsi-commercial-raw.jpg",
      fullName: "Aza mahmadiani",
      rate: 5,
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
    },
    {
      image:
        "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/thwFpwly6MXSufTuBgx2SAnmfGc=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/HIIZKRXVKEI6LP6NTNXEL35MFE.jpg",
      fullName: "Guram jashi",
      rate: 4,
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
    },
    {
      image:
        "https://cdn.ambebi.ge/media/__thumbs__/images/2020/01-03/lelakakulia-46344.webp",
      fullName: "ioseb orosani",
      rate: 3,
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
    }
  ];
  lastSlideIndex = this.slider.length - 1;
  lastVisibleSlideIndex = 2;
  counter = Array;

  constructor(private swiperService: SwiperService) {}

  ngOnInit() {
    // this.defineSliderConfigrurations();
  }

  defineSliderConfigrurations() {
    let sliderConfigs = {
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
        1700: {
          spaceBetween: 80
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };

    let container = "swiper-container";

    this.swiperService.setNewSwiperConfigs(container, sliderConfigs);
  }
}
