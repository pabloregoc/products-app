import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { productsTableComponent } from './products-table.component';

describe('ProductsTableComponent', () => {
  let component: productsTableComponent;
  let fixture: ComponentFixture<productsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ productsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(productsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
