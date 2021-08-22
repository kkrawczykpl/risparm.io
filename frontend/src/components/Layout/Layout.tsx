import * as React from 'react';
import { useLoadingRoute } from 'react-navi';
import { Navbar } from '../../components/Navbar/Navbar';
import { navbarItems } from '../../constants/navbarItems';
import { sidebarItems } from '../../constants/sidebarItems';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { Sidebar } from '../Sidebar/Sidebar';

export const Layout: React.FC<React.ReactNode> = ({ children }) => {
  let loadingRoute = useLoadingRoute();

  return (
    <div className='app-layout'>
      <LoadingSpinner isLoading={!!loadingRoute} delay={300}></LoadingSpinner>
      <Sidebar sidebarItems={sidebarItems} />
      <Navbar navbarItems={navbarItems}></Navbar>
      <main>{children}</main>
    </div>
  );
};
