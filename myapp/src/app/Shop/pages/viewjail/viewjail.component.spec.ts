import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewjailComponent } from './viewjail.component';

describe('ViewjailComponent', () => {
  let component: ViewjailComponent;
  let fixture: ComponentFixture<ViewjailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewjailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewjailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
