import { Injectable, ComponentRef, ViewContainerRef } from '@angular/core';
import {
  TDialogComponent,
  TDialogData,
  TDialogRefs,
} from './dialog.interfaces';
import { DialogComponent } from '../../components/dialogs/dialog.component';

@Injectable()
export class DialogService {
  private counter = 0;
  private dialogRefs: TDialogRefs = {};
  private container!: ViewContainerRef;

  setContainer(container: ViewContainerRef): void {
    this.container = container;
  }

  open<T>(
    dialog: TDialogComponent<T>,
    data?: TDialogData<T>,
    settings?: TDialogData<DialogComponent<T>>
  ): void {
    if (this.dialogRefs[`dialog_id_${this.counter}`]) {
      this.close(`dialog_id_${this.counter}`);
    }

    this.counter++;
    const dialogID = `dialog_id_${this.counter}`;
    const dialogReference: ComponentRef<any> = this.container.createComponent(
      DialogComponent<T>
    );

    if (data) {
      dialogReference.instance.data = data;
    }

    dialogReference.instance.dialogComponent = dialog;
    dialogReference.instance.dialogID = dialogID;

    if (settings) {
      for (const key of Object.keys(settings)) {
        dialogReference.instance[key] = (settings as Record<string, any>)[key];
      }
    }

    dialogReference.changeDetectorRef.detectChanges();
    this.dialogRefs[dialogID] = dialogReference;
  }

  close(dialogID: string): void {
    const { [dialogID]: removedDialog, ...restDialogs } = this.dialogRefs;
    this.dialogRefs = restDialogs;
    removedDialog.destroy();
  }
}
