import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageableUserComponent } from './manageable-user.component';

describe('ManageableUserComponent', () => {
  let component: ManageableUserComponent;
  let fixture: ComponentFixture<ManageableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageableUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
