import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompreplyComponent } from './compreply.component';

describe('CompreplyComponent', () => {
  let component: CompreplyComponent;
  let fixture: ComponentFixture<CompreplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompreplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
