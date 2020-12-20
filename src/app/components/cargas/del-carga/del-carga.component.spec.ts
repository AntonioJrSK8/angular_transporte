import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelCargaComponent } from './del-carga.component';

describe('DelCargaComponent', () => {
  let component: DelCargaComponent;
  let fixture: ComponentFixture<DelCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
