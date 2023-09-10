import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberFieldComponent } from './number/number-field.component';
import { TextFieldComponent } from './text/text-field.component';
import { TextareaFieldComponent } from './textarea/textarea-field.component';

@NgModule({
  declarations: [
    TextFieldComponent,
    NumberFieldComponent,
    TextareaFieldComponent,
  ],
  exports: [TextFieldComponent, NumberFieldComponent, TextareaFieldComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class FormFieldsModule {}
