import { Overlay } from '@angular/cdk/overlay';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        AccountComponent,
        MatSnackBar,
        Overlay
      ]
    });
    injector = getTestBed();
    component = TestBed.inject(AccountComponent);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
