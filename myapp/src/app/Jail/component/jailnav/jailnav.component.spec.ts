import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JailnavComponent } from './jailnav.component';

describe('JailnavComponent', () => {
  let component: JailnavComponent;
  let fixture: ComponentFixture<JailnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JailnavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JailnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
