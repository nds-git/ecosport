import type {  PostType } from '../types';
import apiInstance from './apiConfig';

export const getPosts = (): Promise<PostType[]> =>
  apiInstance
    .get<PostType[]>('/api/posts')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const deletePost = (id: number): Promise<PostType['id']> => 
  apiInstance
    .delete(`/api/posts/${id}`)
    .then(() => id)
    .catch((error) => Promise.reject(error));


export const createPost = (data: FormData): Promise<PostType> =>
  apiInstance
    .post<PostType>('/api/posts', data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
