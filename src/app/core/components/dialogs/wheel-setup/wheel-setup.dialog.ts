import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './wheel-setup.dialog.html',
  styleUrls: ['./wheel-setup.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WheelSetupDialog implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
