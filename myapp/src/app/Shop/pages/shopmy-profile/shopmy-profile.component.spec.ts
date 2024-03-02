import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopmyProfileComponent } from './shopmy-profile.component';

describe('ShopmyProfileComponent', () => {
  let component: ShopmyProfileComponent;
  let fixture: ComponentFixture<ShopmyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopmyProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopmyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
