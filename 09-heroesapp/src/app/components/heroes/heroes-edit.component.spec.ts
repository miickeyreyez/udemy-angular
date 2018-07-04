import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesEditComponent } from './heroes-edit.component';

describe('HeroesEditComponent', () => {
  let component: HeroesEditComponent;
  let fixture: ComponentFixture<HeroesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
