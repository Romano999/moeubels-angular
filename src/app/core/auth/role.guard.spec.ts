import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RoleGuard } from './role.guard';

describe('RoleGuard', () => {
  let component: RoleGuard;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        RoleGuard
      ]
    });
    injector = getTestBed();
    component = TestBed.inject(RoleGuard);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
