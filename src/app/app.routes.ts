import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { SectionRequestComponent } from './components/landing-page/section-request/section-request.component';
import { SectionBenefitsComponent } from './components/landing-page/section-benefits/section-benefits.component';
import { SectionContactComponent } from './components/landing-page/section-contact/section-contact.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'section-request', component: SectionRequestComponent },
    { path: 'section-benefits', component: SectionBenefitsComponent },
    { path: 'section-contact', component: SectionContactComponent },
    { path: 'section-footer', component: FooterComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

    // { path: '**', component: PageNotFoundComponent },
    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);

