import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type PrivateRouteProps = {
  children?: JSX.Element;
  isAllowed: boolean;
  redirectTo: string;
};
export default function PrivateRoute({
  children,
  isAllowed,
  redirectTo,
}: PrivateRouteProps): JSX.Element {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children || <Outlet />;
}
