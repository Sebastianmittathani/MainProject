import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcomplaintandreplyComponent } from './viewcomplaintandreply.component';

describe('ViewcomplaintandreplyComponent', () => {
  let component: ViewcomplaintandreplyComponent;
  let fixture: ComponentFixture<ViewcomplaintandreplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcomplaintandreplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewcomplaintandreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
