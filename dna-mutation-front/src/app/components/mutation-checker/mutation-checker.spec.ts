import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MutationChecker } from './mutation-checker';

describe('MutationCheckerComponent', () => {
  let component: MutationChecker;
  let fixture: ComponentFixture<MutationChecker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MutationChecker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutationChecker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
