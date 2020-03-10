import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SwiperService {
  constructor() {}

  setNewSwiperConfigs(container: string, configs: any) {
    let body = document.body;
    let oldScript = document.getElementById("slideScript");
    if (oldScript) {
      body.removeChild(oldScript);
    }
    let script = document.createElement("script");
    script.setAttribute("id", "slideScript");

    let slideConfigs: any = document.createTextNode(`
      let swiper = new Swiper(".${container}", ${JSON.stringify(configs)});
    `);

    try {
      script.appendChild(slideConfigs);
      body.appendChild(script);
    } catch {
      script.text = slideConfigs;
      body.appendChild(script);
    }
  }
}
