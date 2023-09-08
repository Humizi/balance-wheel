import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from '../../button/button.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WheelSetupDialog } from './wheel-setup.dialog';

@NgModule({
  declarations: [WheelSetupDialog],
  exports: [WheelSetupDialog],
  imports: [CommonModule, ButtonModule, FormsModule, ReactiveFormsModule],
})
export class WheelSetupDialogModule {}
