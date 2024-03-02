import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeditProfileComponent } from './shopedit-profile.component';

describe('ShopeditProfileComponent', () => {
  let component: ShopeditProfileComponent;
  let fixture: ComponentFixture<ShopeditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopeditProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopeditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
