import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopmainComponent } from './shopmain.component';

describe('ShopmainComponent', () => {
  let component: ShopmainComponent;
  let fixture: ComponentFixture<ShopmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopmainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
