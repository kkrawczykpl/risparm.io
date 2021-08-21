import * as React from 'react';
import { Logo } from '../Logo/Logo';
import './Navbar.scss';
import { NavbarItem, NavbarItemProps } from './NavbarItems/NavbarItem';

export interface NavbarProps {
  navbarItems: NavbarItemProps[];
}

export const Navbar: React.FC<NavbarProps> = ({ navbarItems }: NavbarProps) => {

    const [isOpened, setIsOpened] = React.useState(false);

    const handleClick = () => {
        setIsOpened(!isOpened);
    }

    return (
    <nav className='navbar'>
      <Logo className={"navbar-logo"}/>

      <div className='menu-icon' onClick={handleClick}>
          <span className={isOpened ? 'close-icon' : 'hamburger-icon'}></span>
      </div>

      <ul className={`navbar-links${isOpened ? ' active': ''}`}>
        {navbarItems.map((item) => (
          <NavbarItem title={item.title} path={item.path}></NavbarItem>
        ))}
      </ul>
    </nav>
  );
};
