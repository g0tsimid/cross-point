import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { NavComponent } from './nav.component';
describe('Nav', () => {
  beforeEachProviders(() => [
    NavComponent
  ]);
  it ('should work', inject([NavComponent], (nav: NavComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});