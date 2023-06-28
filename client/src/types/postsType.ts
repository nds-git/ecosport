export type PostType = {
  id: number;
  title: string;
  img: string;
  userId: number;
};

export type PostFormType = {
  title: HTMLInputElement;
  file: HTMLInputElement & { files: FileList };
};
