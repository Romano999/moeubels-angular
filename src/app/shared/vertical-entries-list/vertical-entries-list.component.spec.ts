import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalEntriesListComponent } from './vertical-entries-list.component';

describe('VerticalEntriesListComponent', () => {
  let component: VerticalEntriesListComponent;
  let fixture: ComponentFixture<VerticalEntriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalEntriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalEntriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
