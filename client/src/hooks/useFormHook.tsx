import type React from 'react';
import type { UserSingInType, UserSingUpType } from '../types';
import { useAppDispatch } from '../features/redux/reduxHooks';
import { userSignInThunk, userSignUpThunk } from '../features/thunkActions';


export type SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;

export type AuthHookReturnedType = {
  signUpHandler: SubmitHandler;
  signInHandler: SubmitHandler;
};

export default function useFormHook(): AuthHookReturnedType {
  const dispatch = useAppDispatch();

  const signUpHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserSingUpType;
    console.log(formData);
    
    void dispatch(userSignUpThunk(formData));
  };

  const signInHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserSingInType;
    void dispatch(userSignInThunk(formData));
  };

  // const subscriberHandler = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserSingInType;
  //   void dispatch(subscriberThunk(formData));
  // };

  return { signUpHandler, signInHandler };
}
