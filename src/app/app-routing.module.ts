import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PartnerListComponent } from './pages/partner-list/partner-list.component';
import { PartnerDetailsComponent } from './pages/partner-details/partner-details.component';
import { ChuckNorrisComponent } from './pages/chuck-norris/chuck-norris.component';
import { CharacterComponent } from './pages/character/character.component';

// "path" is the URL of the route
// "component" is the content of the route
const routes: Routes = [
    { path: '',                       component: HomeComponent },
    { path: 'about',                  component: AboutComponent },
    { path: 'contact-us',             component: ContactUsComponent },
    { path: 'partners',               component: PartnerListComponent },
    { path: 'partners/:thePartnerId', component: PartnerDetailsComponent },
    { path: 'chuck',                  component: ChuckNorrisComponent },
    { path: 'characters',             component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
