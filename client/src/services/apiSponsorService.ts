import type { SponsorType } from '../types';
import apiInstance from './apiConfig';

export const createSponsor = (data: FormData): Promise<SponsorType> =>
  apiInstance
    .post<SponsorType>('/api/sponsor/new', data)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const getSponsorsExistEvent = (id: number): Promise<SponsorType[]> =>
  apiInstance
    .get<SponsorType[]>(`/api/sponsor/${id}`)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
