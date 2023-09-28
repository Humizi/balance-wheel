import { ComponentRef } from '@angular/core';

type TDialogComponent<T> = new (...args: any[]) => T;

type TDialogData<T> = {
  [K in keyof T]?: T[K];
};

type TDialogRefs = { [uniqId: string]: ComponentRef<any> };

export { TDialogComponent, TDialogData, TDialogRefs };
