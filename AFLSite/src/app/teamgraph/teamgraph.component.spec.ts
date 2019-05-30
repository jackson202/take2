import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamgraphComponent } from './teamgraph.component';

describe('TeamgraphComponent', () => {
  let component: TeamgraphComponent;
  let fixture: ComponentFixture<TeamgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
