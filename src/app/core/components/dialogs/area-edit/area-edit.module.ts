import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AreaEditDialog } from './area-edit.dialog';
import { ButtonModule } from '../../button/button.module';
import { CommonModule } from '@angular/common';
import { FormFieldsModule } from '../../form-fields/form-fields.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AreaEditDialog],
  exports: [AreaEditDialog],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldsModule,
  ],
})
export class AreaEditDialogModule {}
