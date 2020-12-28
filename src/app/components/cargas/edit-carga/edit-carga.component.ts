import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-edit-carga',
  templateUrl: './edit-carga.component.html',
  styleUrls: ['./edit-carga.component.css']
})
export class EditCargaComponent implements OnInit {

  @ViewChild(ModalComponent) modal!: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  edit(): any {
    this.modal.show();
  }
}
