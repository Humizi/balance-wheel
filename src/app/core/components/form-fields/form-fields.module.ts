import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ColorFieldComponent } from './color/color-field.component';
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
    ColorFieldComponent,
  ],
  exports: [
    TextFieldComponent,
    NumberFieldComponent,
    TextareaFieldComponent,
    ColorFieldComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class FormFieldsModule {}
