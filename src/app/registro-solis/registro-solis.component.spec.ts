import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSolisComponent } from './registro-solis.component';

describe('RegistroSolisComponent', () => {
  let component: RegistroSolisComponent;
  let fixture: ComponentFixture<RegistroSolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroSolisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroSolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
