import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrcamentoComponent } from './edit-orcamento.component';

describe('EditOrcamentoComponent', () => {
  let component: EditOrcamentoComponent;
  let fixture: ComponentFixture<EditOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrcamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
