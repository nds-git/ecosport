import type React from 'react';
import { useEffect } from 'react';

import type { EventType, SponsorFormType, SponsorType } from '../types';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import {
  addSponsorThunk,
  getSponsorsExistEventThunk,
} from '../features/thunkActions/sponsorThunkActions';

export type SponsorHandler = {
  addHandler: (e: React.FormEvent<HTMLFormElement & SponsorFormType>, id: EventType['id']) => void;
};

export default function useSponsorHook(): SponsorHandler {
  const dispatch = useAppDispatch();

  // const eventId = useAppSelector((state) => state.events.event.id);

  // useEffect(() => {
  //   void dispatch(getSponsorsExistEventThunk(eventId));
  // }, []);

  // console.log('sponsors-->', sponsors);

  const addHandler = (e: React.FormEvent<HTMLFormElement & SponsorFormType>, id: number): void => {
    e.preventDefault();
    if (!e.currentTarget.title.value.trim() || !e.currentTarget.file.files?.length) return;
    const formData = new FormData();
    formData.append('file', e.currentTarget.file.files[0]);
    formData.append('title', e.currentTarget.title.value);
    formData.append('body', e.currentTarget.body.value);
    formData.append('name', e.currentTarget.name.value);
    formData.append('message', e.currentTarget.message.value);
    formData.append('email', e.currentTarget.email.value);
    formData.append('eventId', id);

    void dispatch(addSponsorThunk(formData));
  };

  return { addHandler };
}
