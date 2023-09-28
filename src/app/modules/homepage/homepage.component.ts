import { AreasState, areasSelector, updateAreas } from 'src/app/reducers/areas';
import { Chart, TooltipItem, TooltipModel, registerables } from 'chart.js';
import { Component, ViewContainerRef } from '@angular/core';

import { Actions } from '@ngrx/effects';
import { DatabaseService } from 'src/app/core/services/database/database.service';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { Store } from '@ngrx/store';
import { WheelSetupDialog } from 'src/app/core/components/dialogs/wheel-setup/wheel-setup.dialog';

Chart.register(...registerables);

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  public chart: any;
  public areas$ = this.store.select(areasSelector);
  public areas!: AreasState;
  public isLoading = true;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private dialogService: DialogService,
    private store: Store,
    private actions: Actions,
    private databaseService: DatabaseService
  ) {
    this.dialogService.setContainer(this.viewContainerRef);

    this.databaseService.getAreas().then((value) => {
      if (value) {
        this.store.dispatch(updateAreas(value));
      }

      this.areas$
        .subscribe((data) => {
          this.areas = data;
        })
        .unsubscribe();

      this.actions.subscribe((action) => {
        if (action.type === '[AREAS] Save') {
          this.areas$
            .subscribe((data) => {
              this.areas = data;
              this.chart.data = this.getChartData();
              this.chart.update();
            })
            .unsubscribe();
        }
      });

      this.isLoading = false;
      this.createChart();
    });
  }

  getChartData() {
    return {
      labels: this.areas.areas.map((item) => item.title || ''),
      datasets: [
        {
          label: this.areas.areas
            .map((item, idx) => `${idx}-${item.grade_next_desc}`)
            .join('###'),
          data: this.areas.areas.map((item) => item.point || 1),
          backgroundColor: this.areas.areas.map((item) => item.color || ''),
        },
      ],
    };
  }

  createChart() {
    this.chart = new Chart('chart', {
      type: 'polarArea',
      data: this.getChartData(),
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
          },
          tooltip: {
            displayColors: false,

            callbacks: {
              label: function (
                this: TooltipModel<'polarArea'>,
                tooltipItem: TooltipItem<'polarArea'>
              ) {
                return [
                  `Текущая оценка сферы ${tooltipItem.formattedValue}.`,
                  'Для улучшения сферы необходимо: ',
                  `${tooltipItem.dataset.label
                    ?.split('###')
                    [tooltipItem.datasetIndex].slice(2)}`,
                ];
              },
            },
          },
        },
      },
    });
  }

  openWheelSetup(): void {
    this.dialogService.open(WheelSetupDialog);
  }
}
