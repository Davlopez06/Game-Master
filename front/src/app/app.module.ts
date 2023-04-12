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
import { CardsComponent } from './componets/cards/cards.component';
import { CardComponent } from './componets/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomepageComponent,
    NavbarComponent,
    MenuComponent,
    CardsComponent,
    CardComponent,
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
