import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RivalsformComponent } from './rivalsform.component';

describe('RivalsformComponent', () => {
  let component: RivalsformComponent;
  let fixture: ComponentFixture<RivalsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RivalsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivalsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
