import type React from 'react';
import { useEffect } from 'react';
import type { SponsorFormType, SponsorType } from '../types';
import { useAppDispatch } from '../features/redux/reduxHooks';
import {
  addSponsorThunk,
  getSponsorsExistEventThunk,
} from '../features/thunkActions/sponsorThunkActions';

export type SponsorHandler = {
  addHandler: (e: React.FormEvent<HTMLFormElement & SponsorFormType>) => void;
};

export default function useSponsorHook(id: string): SponsorHandler {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getSponsorsExistEventThunk());
  }, []);

  const addHandler = (e: React.FormEvent<HTMLFormElement & SponsorFormType>): void => {
    e.preventDefault();
    if (!e.currentTarget.title.value.trim() || !e.currentTarget.file.files?.length) return;
    const formData = new FormData();
    formData.append('file', e.currentTarget.file.files[0]);
    formData.append('title', e.currentTarget.title.value);
    formData.append('body', e.currentTarget.body.value);
    formData.append('name', e.currentTarget.name.value);
    formData.append('message', e.currentTarget.message.value);
    formData.append('email', e.currentTarget.email.value);
    void dispatch(addSponsorThunk(formData));
  };

  return { addHandler };
}
