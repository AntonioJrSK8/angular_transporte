import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCargaComponent } from './edit-carga.component';

describe('EditCargaComponent', () => {
  let component: EditCargaComponent;
  let fixture: ComponentFixture<EditCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
