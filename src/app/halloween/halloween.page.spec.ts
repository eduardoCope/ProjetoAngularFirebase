import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HalloweenPage } from './halloween.page';

describe('HalloweenPage', () => {
  let component: HalloweenPage;
  let fixture: ComponentFixture<HalloweenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HalloweenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
