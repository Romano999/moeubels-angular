import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartPayItemComponent } from './shopping-cart-pay-item.component';

describe('ShoppingCartPayItemComponent', () => {
  let component: ShoppingCartPayItemComponent;
  let fixture: ComponentFixture<ShoppingCartPayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartPayItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartPayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
