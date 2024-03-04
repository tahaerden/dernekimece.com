import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  activeProject!: number | null;
  // const storedLang = localStorage.getItem('lang');
  // this.selectedLang = storedLang || this.translate.getDefaultLang();

  constructor(private translate: TranslateService) {
    // const storedLang = localStorage.getItem("lang");
    // this.selectedLang = storedLang || this.translate.getDefaultLang();
  }

  changeLanguage(selectedLang: string) {
    this.translate.use(selectedLang);
    // this.selectedLang = selectedLang;
    localStorage.setItem("lang", selectedLang);
  }
  scrollToElement($element: any): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
