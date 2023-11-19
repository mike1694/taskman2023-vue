import type { Nullable } from '@/types';

export type TaskItemType = 'normal' | 'hot';

export type TaskItem = {
  label: string;
  type: TaskItemType;
  created: string;
  closed: boolean;
  id: number;
  info: string;
  reopen: boolean;
  maxDate: Nullable<string>;
  maxTime: Nullable<string>;
  timer: boolean;
  closed_date: Nullable<string>;
  result?: string;
};
