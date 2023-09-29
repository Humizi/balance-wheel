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
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true,
    },
    {
      provide: NgControl,
      useExisting: forwardRef(() => TextFieldComponent),
    },
  ],
})
export class TextFieldComponent
  implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy
{
  @Input() label = 'Text Field';
  @Input() placeholder = 'Enter text...';
  @Input() disabled = false;

  public data!: string;
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
    this.statusChanges = this.control.statusChanges
      .pipe(tap(() => this.cd.detectChanges()))
      .subscribe();
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

  changeData(value: string): void {
    this.data = value;
    this.onChange(value);
    this.onTouch();
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.cd.detectChanges();
  }
}
