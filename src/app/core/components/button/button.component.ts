import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { TSizes, TTheme } from './button.interfaces';

@Component({
  selector: 'button[app-button], a[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit, OnChanges {
  @HostBinding('class.button--disabled')
  @HostBinding('attr.disabled')
  isDisabled: true | null = null;

  @Input() size: TSizes = 'large';
  @Input() color: TTheme = 'blue';
  @Input() disabled!: boolean;
  @Input() icon!: string;

  private className = 'button';

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.classList.add(this.className);
  }

  ngOnInit(): void {
    this.setColorClass(this.color);
    this.setSizeClass(this.size);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      this.setColorClass(
        changes['color'].currentValue,
        changes['color'].previousValue
      );
    }
    if (changes['disabled']) {
      this.isDisabled = !!changes['disabled'].currentValue || null;
    }
    if (changes['size']) {
      this.setSizeClass(
        changes['size'].currentValue,
        changes['size'].previousValue
      );
    }
  }

  private setColorClass(currentColor: TTheme, previousColor?: TTheme): void {
    if (currentColor !== previousColor) {
      if (previousColor) {
        this.elementRef.nativeElement.classList.remove(
          `button--${previousColor}`
        );
      }
      if (currentColor) {
        this.elementRef.nativeElement.classList.add(`button--${currentColor}`);
      }
    }
  }

  private setSizeClass(currentSize: TSizes, previousSize?: TSizes): void {
    if (currentSize !== previousSize) {
      if (previousSize) {
        this.elementRef.nativeElement.classList.remove(
          `button--${previousSize}`
        );
      }
      if (currentSize) {
        this.elementRef.nativeElement.classList.add(`button--${currentSize}`);
      }
    }
  }
}
