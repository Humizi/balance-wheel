import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  saveAreas,
  updateAreas,
} from 'src/app/core/store/actions/areas.actions';

import { DatabaseService } from 'src/app/core/services/database/database.service';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { IAreasState } from 'src/app/core/store/models/areas.models';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './area-edit.dialog.html',
  styleUrls: ['./area-edit.dialog.scss'],
})
export class AreaEditDialog implements OnInit {
  @Input() areaID!: number;
  @Input() dialogID!: string;
  @Input() areasData!: IAreasState;

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store$: Store,
    private databaseService: DatabaseService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    const area = this.areasData.areas.find((area) => area.id === this.areaID)!;
    this.form = this.fb.group({
      id: area.id,
      title: area.title,
      point: area.point,
      color: area.color,
      description: area.description,
      grade_1_desc: area.grade_1_desc,
      grade_10_desc: area.grade_10_desc,
      grade_current_desc: area.grade_current_desc,
      grade_next_desc: area.grade_next_desc,
    });
  }

  get title(): string {
    return this.form.get('title')?.value;
  }

  get description(): string {
    return this.form.get('description')?.value;
  }

  save(): void {
    const newData = [...this.areasData.areas];
    const areaIdx = newData.findIndex((area) => area.id === this.areaID);
    newData.splice(areaIdx, 1, this.form.getRawValue());

    this.databaseService.saveAreas({ areas: newData }).then(() => {
      this.store$.dispatch(updateAreas({ areas: newData }));
      this.store$.dispatch(saveAreas());
      this.dialogService.close(this.dialogID);
    });
  }
}
