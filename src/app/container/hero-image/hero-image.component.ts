import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { WebConfig, Achievement } from 'src/app/models';
import { WEB_CONFIGS } from 'src/app/shared/enums';
import { UtilService } from 'src/app/utils/util.service';


@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HeroImageComponent implements OnInit {
  @Input() configData: WebConfig;
  bannerData: any;
  emergencyContactNo: string;
  isBookAppointment = false;
  achievement: Achievement;
  constructor(config: NgbCarouselConfig, private utilService: UtilService) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.getBannerData();
  }

  private getBannerData() {
    this.bannerData = [];
    if (this.configData) {
      this.emergencyContactNo = this.configData.emergencyContactNo;
      this.isBookAppointment = this.configData.bookAppointment || false;
      if (this.configData.websiteSetupTransList && Array.isArray(this.configData.websiteSetupTransList)) {
        this.bannerData = this.utilService.filterActiveItems(this.configData.websiteSetupTransList, 'setupNm', WEB_CONFIGS.BANNER_NAME);
        const achievements = this.utilService.filterActiveItems(this.configData.websiteSetupTransList, 'setupNm', WEB_CONFIGS.ACHIEVEMENTS);
        if (achievements && achievements.length) {
          this.achievement = {
            achievementText: achievements[0].description,
            achievementUrl: 'https://dru.care'
          };
        }
      }
    }
  }
}
