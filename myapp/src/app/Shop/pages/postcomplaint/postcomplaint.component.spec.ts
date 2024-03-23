import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcomplaintComponent } from './postcomplaint.component';

describe('PostcomplaintComponent', () => {
  let component: PostcomplaintComponent;
  let fixture: ComponentFixture<PostcomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostcomplaintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
