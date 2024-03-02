import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopchangepassComponent } from './shopchangepass.component';

describe('ShopchangepassComponent', () => {
  let component: ShopchangepassComponent;
  let fixture: ComponentFixture<ShopchangepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopchangepassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopchangepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
