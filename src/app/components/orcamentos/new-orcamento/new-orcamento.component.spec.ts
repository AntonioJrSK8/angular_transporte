import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrcamentoComponent } from './new-orcamento.component';

describe('NewOrcamentoComponent', () => {
  let component: NewOrcamentoComponent;
  let fixture: ComponentFixture<NewOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrcamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
