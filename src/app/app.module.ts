import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenunavComponent } from './menunav/menunav.component';
import { SumaComponent } from './suma/suma.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { RestaComponent } from './resta/resta.component';
import { HomeComponent } from './home/home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenunavComponent,
    SumaComponent,
    RestaComponent,
    HomeComponent,
    EncabezadoComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
