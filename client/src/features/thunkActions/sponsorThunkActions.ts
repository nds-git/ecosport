import { createAsyncThunk } from '@reduxjs/toolkit';
import type { SponsorType, EventType } from '../../types';
import { createSponsor, getSponsorsExistEvent } from '../../services';

export const addSponsorThunk = createAsyncThunk<SponsorType, FormData>(
  'sponsor/addSponsor',
  async (data) =>
    createSponsor(data)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

export const getSponsorsExistEventThunk = createAsyncThunk<SponsorType[], string>(
  'sponsor/getSponsorsExistEvent',
  async (data) =>
    getSponsorsExistEvent(data)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);
