import { Component, OnInit, ElementRef } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
            <div class="modal-content">

              <div class="modal-header">
                <ng-content select="[modal-title]"></ng-content>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <ng-content select="[modal-body]"></ng-content>
              <ng-content select="[modal-footer]"></ng-content>

            </div>
      </div>
    </div>
  `,
  styles: []
})
export class ModalComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

  show(): any {
    console.log(this.getModal);

    $(this.getModal).modal('show');
  }

  hide(): any {
    $(this.getModal).modal('hide');
  }

  private get getModal(): HTMLElement {
    const element: HTMLElement = this.element.nativeElement;
    return element.firstChild  as HTMLElement;
  }

}