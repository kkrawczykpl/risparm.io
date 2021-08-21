import * as React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { navbarItems } from '../../constants/navbarItems';

export const HomePage: React.FC = () => {

  return (
    <div className='home-page'>
      <Navbar
      navbarItems={navbarItems}
      ></Navbar>
    </div>
  );
};
