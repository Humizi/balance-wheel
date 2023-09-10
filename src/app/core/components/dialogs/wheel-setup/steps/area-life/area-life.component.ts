import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

import { DEFAULT_SETTINGS } from 'src/app/default-settings';
import { Store } from '@ngrx/store';
import { stepSelector } from 'src/app/reducers/wizard';

@Component({
  selector: 'app-area-life',
  templateUrl: './area-life.component.html',
  styleUrls: ['./area-life.component.scss'],
})
export class AreaLifeComponent implements OnInit {
  public step$ = this.store.select(stepSelector);
  public form = this.fb.group({
    areas: this.fb.array([]),
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    DEFAULT_SETTINGS.forEach((item) => {
      const area = this.fb.group({
        title: item.title,
        point: item.point,
        color: item.color,
      });

      this.areas.push(area);
    });

    console.log('FORM: ', this.form);
  }

  get areas(): FormArray {
    return this.form.controls['areas'] as FormArray;
  }

  getAreaControl(index: number) {
    return this.form.controls['areas'].controls[index];
  }
}
