import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DelCargaComponent } from './components/cargas/del-carga/del-carga.component';
import { NewCargaComponent } from './components/cargas/new-carga/new-carga.component';
import { EditCargaComponent } from './components/cargas/edit-carga/edit-carga.component';
import { ListCargaComponent } from './components/cargas/list-carga/list-carga.component';
import { DashboardComponent } from './components/dashboards/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AlertSucessoComponent } from './components/alert-sucesso/alert-sucesso.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    DelCargaComponent,
    NewCargaComponent,
    EditCargaComponent,
    ListCargaComponent,
    AlertSucessoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
