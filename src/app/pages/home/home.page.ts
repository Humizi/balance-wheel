import { Chart, TooltipItem, TooltipModel, registerables } from 'chart.js';
import { Component, ViewContainerRef } from '@angular/core';
import {
  areasActionsType,
  updateAreas,
} from 'src/app/core/store/actions/areas.actions';
import { first, tap } from 'rxjs';

import { Actions } from '@ngrx/effects';
import { AreaEditDialog } from 'src/app/core/components/dialogs/area-edit/area-edit.dialog';
import { DatabaseService } from 'src/app/core/services/database/database.service';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { IAreasState } from 'src/app/core/store/models/areas.models';
import { ResetSettingsDialog } from 'src/app/core/components/dialogs/reset-settings/reset-settings.dialog';
import { Store } from '@ngrx/store';
import { WheelSetupDialog } from 'src/app/core/components/dialogs/wheel-setup/wheel-setup.dialog';
import { areasSelector } from 'src/app/core/store/selectors/areas.selectors';

Chart.register(...registerables);

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public chart: any;
  public areas$ = this.store$.select(areasSelector).pipe(first());
  public areas!: IAreasState;
  public isLoading = true;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private dialogService: DialogService,
    private store$: Store,
    private actions: Actions,
    private databaseService: DatabaseService
  ) {
    this.dialogService.setContainer(this.viewContainerRef);

    this.databaseService.getAreas().then((value) => {
      if (value) {
        this.areas = value;
        this.store$.dispatch(updateAreas(value));
      } else {
        this.areas$
          .pipe(
            tap((data) => {
              this.areas = data;
              this.databaseService.saveAreas(data);
            })
          )
          .subscribe();
      }

      this.isLoading = false;
      this.createChart();
    });

    this.actions
      .pipe(
        tap((action) => {
          if (action.type === areasActionsType.save) {
            this.areas$
              .pipe(
                tap((data) => {
                  this.areas = data;
                  this.chart.data = this.getChartData();
                  this.chart.update();
                })
              )
              .subscribe();
          }
        })
      )
      .subscribe();
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
                const strArr =
                  tooltipItem.dataset.label
                    ?.split('###')
                    [tooltipItem.dataIndex].slice(2)
                    .match(/(.{1,45})/gim) || '';

                return [
                  `Текущая оценка сферы ${tooltipItem.formattedValue}.`,
                  'Для улучшения сферы необходимо: ',
                  ...strArr,
                ];
              },
            },
          },
        },
      },
    });
  }

  openWheelSetupDialog(): void {
    this.dialogService.open(WheelSetupDialog);
  }

  openAreaEditDialog(areaID: number): void {
    this.dialogService.open(AreaEditDialog, { areaID, areasData: this.areas });
  }

  reset() {
    this.dialogService.open(ResetSettingsDialog);
  }
}
