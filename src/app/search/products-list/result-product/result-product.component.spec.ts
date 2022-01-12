import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultProductComponent } from './result-product.component';

describe('ResultProductComponent', () => {
  let component: ResultProductComponent;
  let fixture: ComponentFixture<ResultProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
