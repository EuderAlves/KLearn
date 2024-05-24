import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrucaoPagComponent } from './contrucao-pag.component';

describe('ContrucaoPagComponent', () => {
  let component: ContrucaoPagComponent;
  let fixture: ComponentFixture<ContrucaoPagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContrucaoPagComponent]
    });
    fixture = TestBed.createComponent(ContrucaoPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
