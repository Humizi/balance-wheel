import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DialogComponent],
  exports: [DialogComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class DialogModule {}
