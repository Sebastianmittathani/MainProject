import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintreplyviewComponent } from './complaintreplyview.component';

describe('ComplaintreplyviewComponent', () => {
  let component: ComplaintreplyviewComponent;
  let fixture: ComponentFixture<ComplaintreplyviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintreplyviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintreplyviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
