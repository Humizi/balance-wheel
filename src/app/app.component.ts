import * as Highcharts from 'highcharts';

import { Component, ViewContainerRef } from '@angular/core';

import { DEFAULT_SETTINGS } from './default-settings';
import { DialogService } from './core/services/dialog/dialog.service';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { WheelSetupDialog } from './core/components/dialogs/wheel-setup/wheel-setup.dialog';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public chart!: Highcharts.Chart;

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
    this.chart = Highcharts.chart('container', {
      chart: {
        polar: true,
        type: 'column',
      },
      credits: {
        enabled: false,
      },
      title: {
        text: undefined,
      },
      xAxis: {
        categories: DEFAULT_SETTINGS.map((item) => item.title || ''),
        tickmarkPlacement: 'on',
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        gridLineInterpolation: 'circle',
        tickInterval: 1,
        min: 0,
        max: 10,
      },
      plotOptions: {
        column: {
          pointPadding: 0,
          groupPadding: 0,
        },
      },
      tooltip: {
        shared: true,
        pointFormat:
          '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>',
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          type: 'column',
          name: 'Column',
          data: DEFAULT_SETTINGS.map((item) => item.point),
          pointPlacement: 'between',
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'horizontal',
              },
              pane: {
                size: '70%',
              },
            },
          },
        ],
      },
    });
  }

  openWheelSetup(): void {
    this.dialogService.open(WheelSetupDialog);
  }
}
