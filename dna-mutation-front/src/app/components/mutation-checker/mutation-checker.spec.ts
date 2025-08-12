import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutationChecker } from './mutation-checker';

describe('MutationChecker', () => {
  let component: MutationChecker;
  let fixture: ComponentFixture<MutationChecker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutationChecker]
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
