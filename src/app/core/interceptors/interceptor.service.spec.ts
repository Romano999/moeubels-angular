import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InterceptorService } from './interceptor.service';

describe('InterceptorService', () => {
  let component: InterceptorService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        InterceptorService
      ]
    });
    injector = getTestBed();
    component = TestBed.inject(InterceptorService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
