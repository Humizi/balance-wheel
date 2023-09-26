import { Chart, registerables } from 'chart.js';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { DEFAULT_SETTINGS } from '../../default-settings';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { WheelSetupDialog } from 'src/app/core/components/dialogs/wheel-setup/wheel-setup.dialog';

Chart.register(...registerables);

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public chart: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private dialogService: DialogService
  ) {
    this.dialogService.setContainer(this.viewContainerRef);
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const data = {
      labels: DEFAULT_SETTINGS.map((item) => item.title || ''),
      datasets: [
        {
          label: 'My First Dataset',
          data: DEFAULT_SETTINGS.map((item) => item.point || 1),
          backgroundColor: DEFAULT_SETTINGS.map((item) => item.color || ''),
        },
      ],
    };

    this.chart = new Chart('MyChart', {
      type: 'polarArea',
      data: data,
      options: {
        responsive: true,
        scales: {
          r: {
            min: 0,
            max: 10,
            ticks: {
              display: false,
              stepSize: 1,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
            // position: 'bottom',
            // align: 'start',
          },
        },
      },
    });
  }

  openWheelSetup(): void {
    this.dialogService.open(WheelSetupDialog);
  }
}
