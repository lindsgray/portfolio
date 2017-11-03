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

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavComponent,
    AboutmeComponent,
    HpPhotosComponent,
    OverviewComponent
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
