import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-bar',
  templateUrl: './step-bar.component.html',
  styleUrls: ['./step-bar.component.scss'],
})
export class StepBarComponent {
  @Input() currentStep!: number;

  public maxStep = 10;
}
