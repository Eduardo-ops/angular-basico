import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploComponenteModuloComponent } from './exemplo-componente-modulo.component';

describe('ExemploComponenteModuloComponent', () => {
  let component: ExemploComponenteModuloComponent;
  let fixture: ComponentFixture<ExemploComponenteModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploComponenteModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploComponenteModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
