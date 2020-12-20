import { Injectable } from '@angular/core';

export interface ICategoria {
  descricao: string;
}
export interface ICargas {
  categoria: string;
  distacia: number;
  custo: number;
}

export interface ITaxa {
  categoria: string;
  eixo: number;
  km_ini: number;
  km_fim: number;
  custo: number;
}

@Injectable({
  providedIn: 'root'
})

export class TransporteService {
  cargas: ICargas[] = [
    { categoria: 'carga geral' , distacia: 0, custo: 0}
  ];

  constructor() {
    // tslint:disable-next-line:no-string-literal
    console.log(this.cargas[0]);
  }

  addCarga(cargas: ICargas): void {
    this.cargas.push(cargas);
  }

  destroyCarga(cargas: ICargas): void {
    const index = this.cargas.indexOf(cargas);
    this.cargas.splice(index, 1);
  }
}
