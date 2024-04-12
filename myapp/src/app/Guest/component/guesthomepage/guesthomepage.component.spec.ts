import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesthomepageComponent } from './guesthomepage.component';

describe('GuesthomepageComponent', () => {
  let component: GuesthomepageComponent;
  let fixture: ComponentFixture<GuesthomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuesthomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuesthomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
