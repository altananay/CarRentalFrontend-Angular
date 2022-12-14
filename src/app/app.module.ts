import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './components/admin/admin/admin.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { CarsComponent } from './components/public/cars/cars.component';
import { NaviComponent } from './components/layouts/navi/navi.component';
import { BrandsComponent } from './components/public/brands/brands.component';
import { BrandlistComponent } from './components/public/brandlist/brandlist.component';
import { CarbrandlistComponent } from './components/public/carbrandlist/carbrandlist.component';
import { CardetailsComponent } from './components/public/cardetails/cardetails.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarwithbrandComponent } from './components/public/carwithbrand/carwithbrand.component';
import { CarwithcolorComponent } from './components/public/carwithcolor/carwithcolor.component';
import { PaymentComponent } from './components/public/payment/payment.component';
import { CarrentalComponent } from './components/public/carrental/carrental.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { AddColorComponent } from './components/admin/add-color/add-color.component';
import { UpdateColorComponent } from './components/admin/update-color/update-color.component';
import { ListColorComponent } from './components/admin/list-color/list-color.component';
import { LoginComponent } from './components/public/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/public/register/register.component';
import { PublicComponent } from './components/public/public/public.component';
import { ProfileComponent } from './components/public/profile/profile.component';
import { FooterComponent } from './components/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarsComponent,
    BrandsComponent,
    BrandlistComponent,
    CarbrandlistComponent,
    CardetailsComponent,
    FilterPipePipe,
    CarwithbrandComponent,
    CarwithcolorComponent,
    CarrentalComponent,
    PaymentComponent,
    AdminComponent,
    SidebarComponent,
    NavbarComponent,
    AddColorComponent,
    UpdateColorComponent,
    ListColorComponent,
    LoginComponent,
    RegisterComponent,
    PublicComponent,
    ProfileComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
