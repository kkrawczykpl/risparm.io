import * as React from 'react';
import { Link } from 'react-navi';
import { Paths } from '../../../router/paths';
import './NavbarItem.scss';

export interface NavbarItemProps {
  title: string;
  path: Paths;
  className?: string;
  isHidden?: boolean;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({
  title,
  path,
  className,
  isHidden,
}: NavbarItemProps) => {
  return (
    <li>
      <Link
        className={`navbar-item ${className ? className : ''}`}
        href={path}
        hidden={!!isHidden}
      >
        {title}
      </Link>
    </li>
  );
};
