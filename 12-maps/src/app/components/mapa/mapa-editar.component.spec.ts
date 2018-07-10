import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaEditarComponent } from './mapa-editar.component';

describe('MapaEditarComponent', () => {
  let component: MapaEditarComponent;
  let fixture: ComponentFixture<MapaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
