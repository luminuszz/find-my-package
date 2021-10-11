import React from 'react';
import { PrivateRoutes } from './routes.private';
import { PublicRoutes } from './routes.public';

export const Routes: React.FC = () => {
  const isLogged = false;

  return isLogged ? <PrivateRoutes /> : <PublicRoutes />;
};
