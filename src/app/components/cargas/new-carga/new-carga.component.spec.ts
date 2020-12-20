import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCargaComponent } from './new-carga.component';

describe('NewCargaComponent', () => {
  let component: NewCargaComponent;
  let fixture: ComponentFixture<NewCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
