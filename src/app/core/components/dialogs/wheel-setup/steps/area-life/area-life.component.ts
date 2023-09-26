import { AreasState, areasSelector, updateData } from 'src/app/reducers/areas';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';
import { stepSelector } from 'src/app/reducers/wizard';

@Component({
  selector: 'app-area-life',
  templateUrl: './area-life.component.html',
  styleUrls: ['./area-life.component.scss'],
})
export class AreaLifeComponent implements OnInit {
  public step$ = this.store.select(stepSelector);
  public areas$ = this.store.select(areasSelector);
  public form = this.fb.group({
    areas: this.fb.array([]),
  });

  constructor(private fb: FormBuilder, private store: Store) {
    this.areas$
      .subscribe((data) => {
        data.areas.forEach((item) => {
          const area = this.fb.group({
            title: item.title,
            point: item.point,
            color: item.color,
            grade_1_desc: item.grade_1_desc,
            grade_10_desc: item.grade_10_desc,
            grade_current_desc: item.grade_current_desc,
            grade_next_desc: item.grade_next_desc,
          });

          this.areas.push(area);
        });
      })
      .unsubscribe();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      this.store.dispatch(updateData(data as AreasState));
    });
  }

  get areas(): FormArray {
    return this.form.controls['areas'] as FormArray;
  }

  getAreaControl(index: number) {
    return this.form.controls['areas'].controls[index];
  }
}
