import { Component, Input } from '@angular/core';

import { DatabaseService } from 'src/app/core/services/database/database.service';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';

@Component({
  templateUrl: './reset-settings.dialog.html',
  styleUrls: ['./reset-settings.dialog.scss'],
})
export class ResetSettingsDialog {
  @Input() dialogID!: string;

  constructor(
    private dialogService: DialogService,
    private databaseService: DatabaseService
  ) {}

  close() {
    this.dialogService.close(this.dialogID);
  }

  confirm() {
    this.databaseService.reset().then(() => {
      window.location.reload();
    });
  }
}
