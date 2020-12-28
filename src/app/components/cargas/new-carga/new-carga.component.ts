import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-new-carga',
  templateUrl: './new-carga.component.html',
  styleUrls: ['./new-carga.component.css']
})
export class NewCargaComponent implements OnInit {

  @ViewChild(ModalComponent) modal!: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  show(): any {
    this.modal.show();
  }
  hide(): any {
    this.modal.hide();
  }

  addCarga(): any {
    this.hide();
  }

}
