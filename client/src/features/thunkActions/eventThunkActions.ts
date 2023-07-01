import { createAsyncThunk } from '@reduxjs/toolkit';
import type { EventFormType, EventType } from '../../types';

import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEvents,
  updateEvent,
  getEvent,
} from '../../services';

export const getAllEventToMainPageThunk = createAsyncThunk<EventType[]>('/events', async () =>
  getAllEvents()
    .then((response) => response)
    .catch((error) => Promise.reject(error)),
);

export const getAllEventThunk = createAsyncThunk<EventType[]>('events/getAll', async () =>
  getEvents()
    .then((response) => response)
    .catch((error) => Promise.reject(error)),
);
export const getOneEventThunk = createAsyncThunk<EventType, EventType['id']>(
  'events/getOne',
  async (data) =>
    getEvent(data)
      .then((response) => response)
      .catch((error) => Promise.reject(error)),
);

export const addEventThunk = createAsyncThunk<EventType, FormData>(
  'events/addEvent',
  async (data) =>
    createEvent(data)
      .then((response) => response)
      .catch((error) => Promise.reject(error)),
);

export const deleteEventThunk = createAsyncThunk<EventType['id'], EventType['id']>(
  'events/delEvent',
  async (data) =>
    deleteEvent(data)
      .then((response) => response)
      .catch((error) => Promise.reject(error)),
);

export const updateEventThunk = createAsyncThunk<
  EventType,
  { data: FormData; id: EventType['id'] }
>('events/updateEvent', async ({ data, id }) =>
  updateEvent({ data, id })
    .then((response) => response)
    .catch((error) => Promise.reject(error)),
);
