import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-carga',
  templateUrl: './edit-carga.component.html',
  styleUrls: ['./edit-carga.component.css']
})
export class EditCargaComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

}
