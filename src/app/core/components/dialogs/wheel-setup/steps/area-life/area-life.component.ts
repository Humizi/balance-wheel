import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';
import { updateAreas } from 'src/app/core/store/actions/areas.actions';
import { IAreasState } from 'src/app/core/store/models/areas.models';

@Component({
  selector: 'app-area-life',
  templateUrl: './area-life.component.html',
  styleUrls: ['./area-life.component.scss'],
})
export class AreaLifeComponent implements OnInit {
  @Input() step!: number;
  @Input() areasData!: IAreasState;

  public form = this.fb.group({
    areas: this.fb.array([]),
  });

  constructor(private fb: FormBuilder, private store$: Store) {}

  ngOnInit(): void {
    this.areasData.areas.forEach((item) => {
      const area = this.fb.group({
        id: item.id,
        title: item.title,
        point: item.point,
        color: item.color,
        grade_1_desc: item.grade_1_desc,
        grade_10_desc: item.grade_10_desc,
        grade_current_desc: item.grade_current_desc,
        grade_next_desc: item.grade_next_desc,
      });

      this.areasControlsArray.push(area);
    });

    this.form.valueChanges.subscribe((data) => {
      this.store$.dispatch(updateAreas(data as IAreasState));
    });
  }

  get areasControlsArray(): FormArray {
    return this.form.controls['areas'] as FormArray;
  }

  getAreaControl(index: number) {
    const fixIndex = index - 2;
    return this.form.controls['areas'].controls[fixIndex];
  }
}
