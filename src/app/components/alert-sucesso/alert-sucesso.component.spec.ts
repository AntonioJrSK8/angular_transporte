import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSucessoComponent } from './alert-sucesso.component';

describe('AlertSucessoComponent', () => {
  let component: AlertSucessoComponent;
  let fixture: ComponentFixture<AlertSucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertSucessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
