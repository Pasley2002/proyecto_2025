import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaComponent } from './persona.component';

describe('PersonaComponent', () => {
  let component: PersonaComponent;
  let fixture: ComponentFixture<PersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});