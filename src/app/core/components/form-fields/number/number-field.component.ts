import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
  UntypedFormControl,
} from '@angular/forms';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberFieldComponent),
      multi: true,
    },
    {
      provide: NgControl,
      useExisting: forwardRef(() => NumberFieldComponent),
    },
  ],
})
export class NumberFieldComponent
  implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy
{
  @Input() label = 'Number Field';
  @Input() placeholder = 'Enter text...';
  @Input() disabled = false;
  @Input() transparent = false;

  public data!: number;
  private control!: UntypedFormControl;
  private ngControl!: NgControl;
  private statusChanges!: Subscription;

  private onChange: (value: any) => void = () => {};
  private onTouch: () => void = () => {};

  constructor(private cd: ChangeDetectorRef, private inj: Injector) {}

  ngOnInit(): void {
    this.ngControl = this.inj.get(NgControl);
  }

  ngAfterViewInit(): void {
    this.control = this.ngControl.control as UntypedFormControl;
    this.statusChanges = this.control.statusChanges.subscribe(() => {
      this.cd.detectChanges();
    });
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.statusChanges.unsubscribe();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(data: any): void {
    this.data = data;
  }

  changeData(value: number): void {
    this.data = value;
    this.onChange(value);
    this.onTouch();
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.cd.detectChanges();
  }

  increase(): void {
    if (this.data < 10) {
      this.data = this.data + 1;
      this.changeData(this.data);
    }
  }

  decrease(): void {
    if (this.data > 1) {
      this.data = this.data - 1;
      this.changeData(this.data);
    }
  }
}
