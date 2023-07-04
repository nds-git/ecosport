import type { RowsType } from './rowsType';
import type { SponsorType } from './sponsorType';

export type EventType = {
  Sponsors: SponsorType[];
  rows: RowsType[];
  id: number;
  title: string;
  body: string;
  date: Date;
  time: Date;
  count_user: number;
  geo: string;
  manager_id: number;
  event_status: boolean;
  event_archive: boolean;
  img: string;
  subscribe: number;
  address: string;
};

export type EventFormType = {
  title: HTMLInputElement;
  body: HTMLInputElement;
  date: HTMLInputElement;
  time: HTMLInputElement;
  count_user: HTMLInputElement;
  geo: HTMLInputElement;
  subscribe: HTMLInputElement;
  address: HTMLInputElement;
  file: HTMLInputElement & { files: FileList };

};
