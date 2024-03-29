import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyproductComponent } from './buyproduct.component';

describe('BuyproductComponent', () => {
  let component: BuyproductComponent;
  let fixture: ComponentFixture<BuyproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
