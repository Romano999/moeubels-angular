import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductListComponent } from './manage-product-list.component';

describe('ManageProductListComponent', () => {
  let component: ManageProductListComponent;
  let fixture: ComponentFixture<ManageProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
