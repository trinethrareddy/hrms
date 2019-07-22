import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  providers: [NgbCarouselConfig, NgbRatingConfig],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsComponent implements OnInit {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig, ratingConfig: NgbRatingConfig) {
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    // Rating
    ratingConfig.max = 5;
    ratingConfig.readonly = true;
  }
  currentRate = 3;
  ngOnInit() {
  }

}
