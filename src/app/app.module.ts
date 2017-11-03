import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app.routes';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HpPhotosComponent } from './components/hp-photos/hp-photos.component';
import { OverviewComponent } from './components/overview/overview.component';
import { DesignComponent } from './components/design/design.component';
import { DevTabComponent } from './components/dev-tab/dev-tab.component';
import { ReviewComponent } from './components/review/review.component';
import { MovieheroComponent } from './components/moviehero/moviehero.component';
import { DetailsComponent } from './components/details/details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PhotographyComponent } from './components/photography/photography.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavComponent,
    AboutmeComponent,
    HpPhotosComponent,
    OverviewComponent,
    DesignComponent,
    DevTabComponent,
    ReviewComponent,
    MovieheroComponent,
    DetailsComponent,
    MoviesComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
