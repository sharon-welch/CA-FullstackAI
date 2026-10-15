import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostBoard } from './post-board';

describe('PostBoard', () => {
  let component: PostBoard;
  let fixture: ComponentFixture<PostBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostBoard],
    }).compileComponents();

    fixture = TestBed.createComponent(PostBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
