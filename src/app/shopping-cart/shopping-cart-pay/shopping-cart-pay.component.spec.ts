import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartPayComponent } from './shopping-cart-pay.component';

describe('ShoppingCartPayComponent', () => {
  let component: ShoppingCartPayComponent;
  let fixture: ComponentFixture<ShoppingCartPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
