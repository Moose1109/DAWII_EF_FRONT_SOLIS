import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAtencionComponent } from './eliminar-atencion.component';

describe('EliminarAtencionComponent', () => {
  let component: EliminarAtencionComponent;
  let fixture: ComponentFixture<EliminarAtencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarAtencionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
