import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditproductComponent } from './edit-product.component';


describe('EditProductComponent', () => {
  let component: EditproductComponent;
  let fixture: ComponentFixture<EditproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
