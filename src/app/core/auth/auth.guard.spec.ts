import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let component: AuthGuard;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        AuthGuard
      ]
    });
    injector = getTestBed();
    component = TestBed.inject(AuthGuard);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
