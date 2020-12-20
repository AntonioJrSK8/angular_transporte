import { Component, OnInit, ViewChild } from '@angular/core';
import { TransporteService } from 'src/app/services/transporte.service';
import { NewCargaComponent } from '../new-carga/new-carga.component';
import { EditCargaComponent } from '../edit-carga/edit-carga.component';

@Component({
  selector: 'app-list-carga',
  templateUrl: './list-carga.component.html',
  styleUrls: ['./list-carga.component.css']
})
export class ListCargaComponent implements OnInit {

  @ViewChild(NewCargaComponent)
  newCarga!: NewCargaComponent;

  @ViewChild(EditCargaComponent)
  editCarga!: EditCargaComponent;

  constructor(public transporteService: TransporteService) { }

  ngOnInit(): void {
  }

  new(): void {
    this.newCarga.show();
  }

  edit(): void {
    this.newCarga.show();
  }

  destroy(): void {
    //
  }

}
