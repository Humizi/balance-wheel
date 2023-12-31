import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DatabaseService } from 'src/app/core/services/database/database.service';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { Store } from '@ngrx/store';
import {
  decreaseStep,
  increaseStep,
  resetStep,
} from 'src/app/core/store/actions/wizard.actions';
import { saveAreas } from 'src/app/core/store/actions/areas.actions';
import { wizardSelector } from 'src/app/core/store/selectors/wizard.selectors';
import { areasSelector } from 'src/app/core/store/selectors/areas.selectors';
import { IAreasState } from 'src/app/core/store/models/areas.models';
import { tap } from 'rxjs';

@Component({
  templateUrl: './wheel-setup.dialog.html',
  styleUrls: ['./wheel-setup.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WheelSetupDialog {
  @Input() dialogID!: string;

  public step$ = this.store$.select(wizardSelector);
  public areas$ = this.store$
    .select(areasSelector)
    .pipe(tap((data) => (this.areas = data)));
  public areas!: IAreasState;

  constructor(
    private store$: Store,
    private databaseService: DatabaseService,
    private dialogService: DialogService
  ) {}

  nextStep(): void {
    this.store$.dispatch(increaseStep());
  }

  prevStep(): void {
    this.store$.dispatch(decreaseStep());
  }

  save(): void {
    this.databaseService.saveAreas(this.areas).then(() => {
      this.store$.dispatch(saveAreas());
      this.store$.dispatch(resetStep());
      this.dialogService.close(this.dialogID);
    });
  }
}
