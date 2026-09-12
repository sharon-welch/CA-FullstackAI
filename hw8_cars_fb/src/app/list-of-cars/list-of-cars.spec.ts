import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOfCars } from './list-of-cars';

describe('ListOfCars', () => {
  let component: ListOfCars;
  let fixture: ComponentFixture<ListOfCars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfCars],
    }).compileComponents();

    fixture = TestBed.createComponent(ListOfCars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
