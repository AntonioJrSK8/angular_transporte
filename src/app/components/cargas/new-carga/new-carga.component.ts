import { Component, OnInit, ViewChild } from '@angular/core';
import { Modalable } from '../../modal/modalable';

@Component({
  selector: 'app-new-carga',
  templateUrl: './new-carga.component.html',
  styleUrls: ['./new-carga.component.css']
})
export class NewCargaComponent extends Modalable implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {

  }

  addCarga(): any {
    this.hide();
  }

}
