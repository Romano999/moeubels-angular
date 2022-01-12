import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalEntriesListComponent } from './horizontal-entries-list.component';

describe('HorizontalEntriesListComponent', () => {
  let component: HorizontalEntriesListComponent;
  let fixture: ComponentFixture<HorizontalEntriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalEntriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalEntriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
