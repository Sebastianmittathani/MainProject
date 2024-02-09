import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JailcomponentComponent } from './jailcomponent.component';

describe('JailcomponentComponent', () => {
  let component: JailcomponentComponent;
  let fixture: ComponentFixture<JailcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JailcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JailcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
