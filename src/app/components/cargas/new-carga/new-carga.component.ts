import { Component, ElementRef, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-new-carga',
  templateUrl: './new-carga.component.html',
  styleUrls: ['./new-carga.component.css']
})
export class NewCargaComponent implements OnInit {

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
