import type React from 'react';
import { useEffect } from 'react';
import type { EventFormType, EventType } from '../types';
import { useAppDispatch } from '../features/redux/reduxHooks';
import {
  deleteEventThunk,
  getAllEventThunk,
  addEventThunk,
  updateEventThunk,
  getAllEventToMainPageThunk,
  getOneEventThunk,
} from '../features/thunkActions/eventThunkActions';

export type EventHandler = {
  addHandler: (e: React.FormEvent<HTMLFormElement & EventFormType>) => void;
  deleteHandler: (id: EventType['id']) => void;
  updateHandler: (e: React.FormEvent<HTMLFormElement & EventFormType>, id: EventType['id']) => void;
};

export default function useEventHook(): EventHandler {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllEventThunk());
  }, []);

  const addHandler = (e: React.FormEvent<HTMLFormElement & EventFormType>): void => {
    e.preventDefault();
    if (!e.currentTarget.title.value.trim() || !e.currentTarget.file.files?.length) return;
    const formData = new FormData();
    formData.append('file', e.currentTarget.file.files[0]);
    formData.append('title', e.currentTarget.title.value);
    formData.append('body', e.currentTarget.body.value);
    formData.append('date', e.currentTarget.date.value);
    formData.append('time', e.currentTarget.time.value);
    formData.append('count_user', e.currentTarget.count_user.value);
    formData.append('geo', e.currentTarget.geo.value);
    void dispatch(addEventThunk(formData));
  };

  const deleteHandler = (id: EventType['id']): void => {
    void dispatch(deleteEventThunk(id));
  };

  const updateHandler = (
    e: React.FormEvent<HTMLFormElement & EventFormType>,
    id: EventType['id'],
  ): void => {
    e.preventDefault();
    if (!e.currentTarget.title.value.trim()) return;
    const formData = new FormData();
    // formData.append('file', e.currentTarget.file.files[0]);
    formData.append('title', e.currentTarget.title.value);
    formData.append('body', e.currentTarget.body.value);
    formData.append('date', e.currentTarget.date.value);
    formData.append('time', e.currentTarget.time.value);
    formData.append('count_user', e.currentTarget.count_user.value);
    formData.append('geo', e.currentTarget.geo.value);
    void dispatch(updateEventThunk({ data: formData, id }));
  };

  return { addHandler, deleteHandler, updateHandler };
}
