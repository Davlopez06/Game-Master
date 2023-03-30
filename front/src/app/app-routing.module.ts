import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: LandingPageComponent },
    { path: 'home', component: LandingPageComponent},
    { path: 'algo', component: LandingPageComponent},
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

  