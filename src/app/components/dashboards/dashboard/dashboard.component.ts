import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  company = {
      name: 'Company iSys',
      end: '',
  };

  menus = [
    { descricao: 'Cargas', link: 'dashboard/cargas' },
    { descricao: 'Orcamentos', link: 'dashboard/orcamentos' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
