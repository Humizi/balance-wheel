import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StepBarComponent } from './step-bar.component';

@NgModule({
  declarations: [StepBarComponent],
  exports: [StepBarComponent],
  imports: [CommonModule],
})
export class StepBarModule {}
