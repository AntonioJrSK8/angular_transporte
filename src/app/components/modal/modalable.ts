import { Injectable, ViewChild } from '@angular/core';
import { ModalComponent } from './modal.component';

@Injectable()
export abstract class Modalable {

  @ViewChild(ModalComponent)
  modalComponent!: ModalComponent;

  hide(): any {
    this.modalComponent.hide();
  }

  show(): any {
    this.modalComponent.show();
  }
}
