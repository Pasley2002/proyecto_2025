import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonasComponent } from './lista-personas.component';

describe('ListaProductosComponent', () => {
  let component: ListaPersonasComponent;
  let fixture: ComponentFixture<ListaPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPersonasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});