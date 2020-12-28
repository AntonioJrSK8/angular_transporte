import { Component, OnInit, ElementRef } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-modal-carga',
  templateUrl: './modal-carga.component.html',
  styleUrls: ['./modal-carga.component.css']
})
export class ModalCargaComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

  show(): any {
    const div = this.getModal();
    $(div).modal('show');
  }

  getModal(): HTMLElement {
    const element: HTMLElement = this.element.nativeElement;
    return element.firstChild as HTMLElement;
  }
}
