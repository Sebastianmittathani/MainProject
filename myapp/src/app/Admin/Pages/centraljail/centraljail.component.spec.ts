import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentraljailComponent } from './centraljail.component';

describe('CentraljailComponent', () => {
  let component: CentraljailComponent;
  let fixture: ComponentFixture<CentraljailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentraljailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentraljailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
