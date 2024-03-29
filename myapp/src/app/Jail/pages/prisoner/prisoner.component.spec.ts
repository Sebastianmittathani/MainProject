import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonerComponent } from './prisoner.component';

describe('PrisonerComponent', () => {
  let component: PrisonerComponent;
  let fixture: ComponentFixture<PrisonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrisonerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrisonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
