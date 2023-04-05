import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { MenuComponent } from './componets/menu/menu.component';
import { StatesService } from './states.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomepageComponent,
    NavbarComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
