import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCargaComponent } from './components/cargas/list-carga/list-carga.component';
import { DashboardComponent } from './components/dashboards/dashboard/dashboard.component';
import { ListOrcamentoComponent } from './components/orcamentos/list-orcamento/list-orcamento.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'cargas', component: ListCargaComponent },
      { path: 'orcamentos', component: ListOrcamentoComponent },

    ] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
