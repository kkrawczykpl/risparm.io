import * as React from 'react';
import { useLoadingRoute } from 'react-navi';
import { Navbar } from '../../components/Navbar/Navbar';
import { navbarItems } from '../../constants/navbarItems';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

export const Layout: React.FC<React.ReactNode> = ({ children }) => {
  let loadingRoute = useLoadingRoute();

  return (
    <div className='app-layout'>
      <LoadingSpinner isLoading={!!loadingRoute} delay={300}></LoadingSpinner>
      <Navbar navbarItems={navbarItems}></Navbar>
      <main>{children}</main>
    </div>
  );
};
