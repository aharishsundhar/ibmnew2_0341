import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmlandsComponent } from './ibmlands.component';

describe('IbmlandsComponent', () => {
  let component: IbmlandsComponent;
  let fixture: ComponentFixture<IbmlandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbmlandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbmlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});