import { AreasState, areasSelector } from 'src/app/reducers/areas';
import { Chart, registerables } from 'chart.js';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { Store } from '@ngrx/store';
import { WheelSetupDialog } from 'src/app/core/components/dialogs/wheel-setup/wheel-setup.dialog';

Chart.register(...registerables);

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public chart: any;
  public areas$ = this.store.select(areasSelector);
  public areas!: AreasState;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private dialogService: DialogService,
    private store: Store
  ) {
    this.dialogService.setContainer(this.viewContainerRef);
    this.areas$
      .subscribe((data) => {
        this.areas = data;
      })
      .unsubscribe();
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const data = {
      labels: this.areas.areas.map((item) => item.title || ''),
      datasets: [
        {
          label: 'My First Dataset',
          data: this.areas.areas.map((item) => item.point || 1),
          backgroundColor: this.areas.areas.map((item) => item.color || ''),
        },
      ],
    };

    this.chart = new Chart('chart', {
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
