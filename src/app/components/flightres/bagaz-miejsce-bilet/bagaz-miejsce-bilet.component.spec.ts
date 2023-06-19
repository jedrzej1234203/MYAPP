import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagazMiejsceBiletComponent } from './bagaz-miejsce-bilet.component';

describe('BagazMiejsceBiletComponent', () => {
  let component: BagazMiejsceBiletComponent;
  let fixture: ComponentFixture<BagazMiejsceBiletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BagazMiejsceBiletComponent]
    });
    fixture = TestBed.createComponent(BagazMiejsceBiletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
