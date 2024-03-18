import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth/auth.guard';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { BMICComponent } from './components/bmic/bmic.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    // canActivate: [AuthGuard],
    // component: AppComponent,
  },
  {
    path: 'bmic',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: BMICComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: HomePageComponent,
  },
  {
    path: 'pricing',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: PricingComponent,
  },
  {
    path: 'about',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: AboutComponent,
  },
  {
    path: 'schedule',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: ScheduleComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
}
