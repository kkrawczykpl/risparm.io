import * as React from 'react';
import { Link } from 'react-navi';
import { Paths } from '../../../router/paths';
import './SidebarItem.scss';

export interface SidebarItemProps {
  title: string;
  path: Paths;
  icon: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  title,
  path,
  icon,
}: SidebarItemProps) => {

  return (
    <li className={`sidebar-item`}>
      <Link
        href={path}
      >
        <i className={icon}></i>
        <span className="sidebar-item-link">{title}</span>
      </Link>
    </li>
  );
};
