import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcompReplyComponent } from './viewcomp-reply.component';

describe('ViewcompReplyComponent', () => {
  let component: ViewcompReplyComponent;
  let fixture: ComponentFixture<ViewcompReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcompReplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewcompReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
