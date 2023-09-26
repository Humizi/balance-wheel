export interface ICategory {
  title: string | null;
  point: number | null;
  color: string | null;
  grade_1_desc: string | null;
  grade_10_desc: string | null;
  grade_current_desc: string | null;
  grade_next_desc: string | null;
}

export const DEFAULT_SETTINGS: ICategory[] = [
  {
    title: 'Здоровье',
    point: 3,
    color: '#7CB5EC',
    grade_1_desc: 'Norm',
    grade_10_desc: 'Norm',
    grade_current_desc: 'Norm',
    grade_next_desc: 'Norm'
  },
  {
    title: 'Работа',
    point: 7,
    color: '#7CB5EC',
    grade_1_desc: 'Norm',
    grade_10_desc: 'Norm',
    grade_current_desc: 'Norm',
    grade_next_desc: 'Norm'
  },
  {
    title: 'Финансы',
    point: 7,
    color: '#7CB5EC',
        grade_1_desc: 'Norm',
    grade_10_desc: 'Norm',
    grade_current_desc: 'Norm',
    grade_next_desc: 'Norm'
  },
  {
    title: 'Отношения',
    point: 10,
    color: '#7CB5EC',
        grade_1_desc: 'Norm',
    grade_10_desc: 'Norm',
    grade_current_desc: 'Norm',
    grade_next_desc: 'Norm'
  },
  {
    title: 'Друзья',
    point: 5,
    color: '#7CB5EC',
        grade_1_desc: 'Norm',
    grade_10_desc: 'Norm',
    grade_current_desc: 'Norm',
    grade_next_desc: 'Norm'
  },
  {
    title: 'Саморазвитие',
    point: 4,
    color: '#7CB5EC',
        grade_1_desc: 'Norm',
    grade_10_desc: 'Norm',
    grade_current_desc: 'Norm',
    grade_next_desc: 'Norm'
  },
  {
    title: 'Творчество',
    point: 1,
    color: '#7CB5EC',
        grade_1_desc: 'Norm',
    grade_10_desc: 'Norm',
    grade_current_desc: 'Norm',
    grade_next_desc: 'Norm'
  },
  {
    title: 'Отдых',
    point: 2,
    color: '#7CB5EC',
        grade_1_desc: 'Norm',
    grade_10_desc: 'Norm',
    grade_current_desc: 'Norm',
    grade_next_desc: 'Norm'
  },
];
