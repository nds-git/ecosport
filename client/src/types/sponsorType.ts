export type SponsorType = {
  id: number;
  name: string;
  title: string;
  body: string;
  message: string;
  email: string;
  logo: string;
};

export type SponsorFormType = {
  id: HTMLInputElement;
  title: HTMLInputElement;
  name: HTMLInputElement;
  body: HTMLInputElement;
  message: HTMLInputElement;
  email: HTMLInputElement;
  file: HTMLInputElement & { files: FileList };
};
