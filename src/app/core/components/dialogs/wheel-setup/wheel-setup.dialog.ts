import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  decreaseStep,
  increaseStep,
  stepSelector,
} from 'src/app/reducers/wizard';

import { DatabaseService } from 'src/app/core/services/database/database.service';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './wheel-setup.dialog.html',
  styleUrls: ['./wheel-setup.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WheelSetupDialog {
  public step$ = this.store.select(stepSelector);

  constructor(private store: Store, private databaseService: DatabaseService) {}

  nextStep(): void {
    this.store.dispatch(increaseStep());
  }

  prevStep(): void {
    this.store.dispatch(decreaseStep());
  }

  save(): void {
    this.databaseService.connect().then((value) => {
      console.log('VALUE: ', value);
    });
  }
}
