import type React from 'react';
import { useEffect } from 'react';
import type { PostFormType, PostType } from '../types';
import { useAppDispatch } from '../features/redux/reduxHooks';
import { addPostThunk, getAllPostsThunk } from '../features/thunkActions';

export type SubmitHandler = {
  submitHandler: (e: React.FormEvent<HTMLFormElement & PostFormType>) => void;
  deletePostHandler: (id: PostType['id']) => void;
};

export default function usePostHook(): SubmitHandler {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllPostsThunk());
  }, []);
  
  const submitHandler = (e: React.FormEvent<HTMLFormElement & PostFormType>): void => {
    e.preventDefault();
    if (!e.currentTarget.title.value.trim() || !e.currentTarget.file.files?.length) return;
    const formData = new FormData();
    formData.append('file', e.currentTarget.file.files[0]);
    formData.append('title', e.currentTarget.title.value);
    void dispatch(addPostThunk(formData));
  };

  const deletePostHandler = (id: PostType['id']): void => {
    console.log('deletePostHandler', id);
  };

  return { submitHandler, deletePostHandler };
}
