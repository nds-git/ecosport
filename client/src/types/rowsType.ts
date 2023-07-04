import type { EventType } from './eventTypes';

export type RowsType = {
  count: number | null;
  rows: EventType[] | null;
};
