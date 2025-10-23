import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStudetns } from './our-studetns';

describe('OurStudetns', () => {
  let component: OurStudetns;
  let fixture: ComponentFixture<OurStudetns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurStudetns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurStudetns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
