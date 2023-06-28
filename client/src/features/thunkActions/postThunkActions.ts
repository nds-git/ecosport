import { createAsyncThunk } from '@reduxjs/toolkit';
import { createPost, getPosts } from '../../services';
import type { PostType } from '../../types';

export const getAllPostsThunk = createAsyncThunk<PostType[]>('posts/getAll', async () =>
  getPosts()
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

export const addPostThunk = createAsyncThunk<PostType, FormData>('posts/addPost', async (data) =>
  createPost(data)
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);
