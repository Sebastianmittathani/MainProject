import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JailsideComponent } from './jailside.component';

describe('JailsideComponent', () => {
  let component: JailsideComponent;
  let fixture: ComponentFixture<JailsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JailsideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JailsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
