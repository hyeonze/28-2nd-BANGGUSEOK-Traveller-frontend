import React from 'react';
import { Outlet } from 'react-router';

export default function withoutNav() {
  return <Outlet />;
}
