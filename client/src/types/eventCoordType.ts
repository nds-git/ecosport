export type EventCoordType = {
  geo: number[]; // массив из 2х эл-в [32.23222, 35.85578]
  address: string | null;
};

export type EventCoordFormType = {
  geo: HTMLInputElement;
  adress: HTMLInputElement;
};
