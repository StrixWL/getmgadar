import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/auth/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { PricingTableComponent } from './components/pricing/pricing-table/pricing-table.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BMICComponent } from './components/bmic/bmic.component';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './pages/schedule/schedule.component';


@NgModule({
  declarations: [AppComponent, HomePageComponent, AboutComponent, HeaderComponent, PricingTableComponent, PricingComponent, NavbarComponent, BMICComponent, ScheduleComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
