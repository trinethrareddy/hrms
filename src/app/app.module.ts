import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { HeroImageComponent } from './container/hero-image/hero-image.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './container/about/about.component';
import { DepartmentsComponent } from './container/departments/departments.component';
import { OurDoctorsComponent } from './container/our-doctors/our-doctors.component';
import { GalleryComponent } from './container/gallery/gallery.component';
import { TestimonialsComponent } from './container/testimonials/testimonials.component';
import { ContactComponent } from './container/contact/contact.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroImageComponent,
    HomeComponent,
    AboutComponent,
    DepartmentsComponent,
    OurDoctorsComponent,
    GalleryComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    CarouselModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
