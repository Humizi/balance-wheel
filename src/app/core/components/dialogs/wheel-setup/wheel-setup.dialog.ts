import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { areasSelector, saveAreas } from 'src/app/reducers/areas';
import {
  decreaseStep,
  increaseStep,
  stepSelector,
} from 'src/app/reducers/wizard';

import { DatabaseService } from 'src/app/core/services/database/database.service';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './wheel-setup.dialog.html',
  styleUrls: ['./wheel-setup.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WheelSetupDialog {
  @Input() dialogID!: string;

  public step$ = this.store.select(stepSelector);
  public areas$ = this.store.select(areasSelector);

  constructor(
    private store: Store,
    private databaseService: DatabaseService,
    private dialogService: DialogService
  ) {}

  nextStep(): void {
    this.store.dispatch(increaseStep());
  }

  prevStep(): void {
    this.store.dispatch(decreaseStep());
  }

  save(): void {
    this.areas$
      .subscribe((data) => {
        this.databaseService.saveAreas(data).then(() => {
          this.store.dispatch(saveAreas());
          this.dialogService.close(this.dialogID);
        });
      })
      .unsubscribe();
  }
}
