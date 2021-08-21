import * as React from 'react';
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
      <a
        className={`navbar-item ${className ? className : ''}`}
        href={path}
        hidden={!!isHidden}
      >
        {title}
      </a>
    </li>
  );
};
