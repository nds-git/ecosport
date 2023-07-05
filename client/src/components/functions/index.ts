export type OptionsType = {
  year: string;
  month: string;
  day: string;
};

export const getEventDate = (date: Date): string => {
  const options: OptionsType = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const eventDate = new Date(date).toLocaleString('ru', options);
  return eventDate;
};