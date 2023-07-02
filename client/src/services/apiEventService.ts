import type { EventType } from '../types';
import apiInstance from './apiConfig';

export const getAllEvents = (): Promise<EventType[]> =>
  apiInstance
    .get<EventType[]>('/api/events')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const getEvents = (): Promise<EventType[]> =>
  apiInstance
    .get<EventType[]>('/api/events/account')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const getEvent = (id: number): Promise<EventType> =>
  apiInstance
    .get<EventType>(`/api/events/${id}`)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const createEvent = (data: FormData): Promise<EventType> =>
  apiInstance
    .post<EventType>('/api/events/new', data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const deleteEvent = (id: number): Promise<EventType['id']> =>
  apiInstance
    .delete(`/api/events/${id}`)
    .then(() => id)
    .catch((error) => Promise.reject(error));

export const updateEvent = ({ data, id }: { data: FormData; id: number }): Promise<EventType> =>
  apiInstance
    .patch<EventType>(`/api/events/${id}`, data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const archiveEvent = (id: number): Promise<EventType['id']> =>
  apiInstance
    .patch(`/api/events/${id}/archive`)
    .then(() => id)
    .catch((error) => Promise.reject(error));

export const getArchiveEvents = (): Promise<EventType[]> =>
  apiInstance
    .get<EventType[]>('/api/events/archive')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
