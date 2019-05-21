import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mainpageComponent } from './mainpage.component';

describe('mainpageComponent', () => {
  let component: mainpageComponent;
  let fixture: ComponentFixture<mainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
