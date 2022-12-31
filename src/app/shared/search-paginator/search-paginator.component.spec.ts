import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPaginatorComponent } from './search-paginator.component';

describe('SearchPaginatorComponent', () => {
  let component: SearchPaginatorComponent;
  let fixture: ComponentFixture<SearchPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
