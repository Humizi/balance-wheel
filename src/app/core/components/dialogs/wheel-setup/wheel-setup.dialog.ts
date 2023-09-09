import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  decreaseStep,
  increaseStep,
  stepSelector,
} from 'src/app/reducers/wizard';

import { Store } from '@ngrx/store';

@Component({
  templateUrl: './wheel-setup.dialog.html',
  styleUrls: ['./wheel-setup.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WheelSetupDialog {
  step$ = this.store.select(stepSelector);

  constructor(private store: Store) {}

  nextStep(): void {
    this.store.dispatch(increaseStep());
  }

  prevStep(): void {
    this.store.dispatch(decreaseStep());
  }
}
