export interface ICategory {
  title: string | null;
  point: number | null;
  color: string | null;
}

export const DEFAULT_SETTINGS: ICategory[] = [
  {
    title: 'Здоровье',
    point: 3,
    color: '#7CB5EC',
  },
  {
    title: 'Работа',
    point: 7,
    color: '#7CB5EC',
  },
  {
    title: 'Финансы',
    point: 7,
    color: '#7CB5EC',
  },
  {
    title: 'Отношения',
    point: 10,
    color: '#7CB5EC',
  },
  {
    title: 'Друзья',
    point: 5,
    color: '#7CB5EC',
  },
  {
    title: 'Саморазвитие',
    point: 4,
    color: '#7CB5EC',
  },
  {
    title: 'Творчество',
    point: 1,
    color: '#7CB5EC',
  },
  {
    title: 'Отдых',
    point: 2,
    color: '#7CB5EC',
  },
];
