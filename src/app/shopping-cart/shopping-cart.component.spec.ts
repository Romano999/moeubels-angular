import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShoppingCartComponent } from './shopping-cart.component';
import { Overlay } from '@angular/cdk/overlay';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        ShoppingCartComponent,
        MatSnackBar,
        Overlay
      ]
    });
    injector = getTestBed();
    component = TestBed.inject(ShoppingCartComponent);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
