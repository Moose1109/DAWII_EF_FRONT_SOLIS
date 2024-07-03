import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSolisComponent } from './consulta-solis.component';

describe('ConsultaSolisComponent', () => {
  let component: ConsultaSolisComponent;
  let fixture: ComponentFixture<ConsultaSolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaSolisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaSolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
