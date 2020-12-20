import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelOrcamentoComponent } from './del-orcamento.component';

describe('DelOrcamentoComponent', () => {
  let component: DelOrcamentoComponent;
  let fixture: ComponentFixture<DelOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelOrcamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
