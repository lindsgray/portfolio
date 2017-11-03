import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ReviewComponent } from './components/review/review.component';
import { PhotographyComponent } from './components/photography/photography.component'

const appRoutes: Routes = [
    {
        path: '',
        component: HeroComponent
    },
    {
        path: 'review',
        component: ReviewComponent
    },
    {
        path: 'photography',
        component: PhotographyComponent
    },
    {
        path: '**',
        component: HeroComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule { }