import { ButtonModule } from '../../button/button.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResetSettingsDialog } from './reset-settings.dialog';

@NgModule({
  declarations: [ResetSettingsDialog],
  exports: [ResetSettingsDialog],
  imports: [CommonModule, ButtonModule],
})
export class ResetSettingsModule {}
