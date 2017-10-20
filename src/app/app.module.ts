import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MyDatePickerModule } from 'mydatepicker';

// rutas
import { APP_ROUTING } from './app.routes';
import { NavbarComponent } from './components/landing-page/navbar/navbar.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';
import { MainSlideComponent } from './components/landing-page/main-slide/main-slide.component';
import { SectionContactComponent } from './components/landing-page/section-contact/section-contact.component';
import { SectionBenefitsComponent } from './components/landing-page/section-benefits/section-benefits.component';
import { SectionRequestComponent } from './components/landing-page/section-request/section-request.component';
import { MenuComponent } from './components/shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MainSlideComponent,
    SectionContactComponent,
    SectionBenefitsComponent,
    SectionRequestComponent,
    MenuComponent    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    MatSliderModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
