import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { DialogService } from '../../services/dialog/dialog.service';
import { TDialogComponent } from '../../services/dialog/dialog.interfaces';

@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent<T> {
  @ViewChild('dialogContent', { read: ViewContainerRef })
  dialogContent!: ViewContainerRef;

  private dialogID!: string;
  private data!: { [key: string]: any };
  private dialogComponent!: TDialogComponent<T>;

  constructor(private dialogService: DialogService) {}

  ngAfterViewInit() {
    const dialogReference: ComponentRef<any> =
      this.dialogContent.createComponent(this.dialogComponent);

    if (this.data) {
      for (const key of Object.keys(this.data)) {
        dialogReference.instance[key] = this.data[key];
      }
    }

    dialogReference.instance.dialogID = this.dialogID;
  }

  close(): void {
    this.dialogService.close(this.dialogID);
  }
}
