import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AreaLifeComponent } from './steps/area-life/area-life.component';
import { ButtonModule } from '../../button/button.module';
import { CommonModule } from '@angular/common';
import { FirstStepComponent } from './steps/first-step/first-step.component';
import { FormFieldsModule } from '../../form-fields/form-fields.module';
import { LastStepComponent } from './steps/last-step/last-step.component';
import { NgModule } from '@angular/core';
import { StepBarModule } from '../../step-bar/step-bar.module';
import { WheelSetupDialog } from './wheel-setup.dialog';

@NgModule({
  declarations: [
    WheelSetupDialog,
    FirstStepComponent,
    AreaLifeComponent,
    LastStepComponent,
  ],
  exports: [WheelSetupDialog],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldsModule,
    StepBarModule,
  ],
})
export class WheelSetupDialogModule {}
