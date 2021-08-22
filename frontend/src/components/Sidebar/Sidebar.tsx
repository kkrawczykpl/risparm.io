import * as React from 'react';
import './Sidebar.scss';
import { SidebarItem, SidebarItemProps } from './SidebarItem/SidebarItem';

export interface SidebarProps {
  sidebarItems: SidebarItemProps[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  sidebarItems,
}: SidebarProps) => {

    const [isSidebarHidden, setSidebar] = React.useState(false);


    const handleSidebarToggle = () => {
        setSidebar(!isSidebarHidden);
    }

  return (
    <div className={`sidebar${isSidebarHidden ? ' close' : ''}`}>
      <div className='sidebar-header'>
          <div className="sidebar-toggle" onClick={handleSidebarToggle}>
            <i className={`bx bx-${isSidebarHidden ? 'chevrons-right' : 'chevrons-left'}`}></i>
          </div>
      </div>
      <ul className='sidebar-links'>
        {sidebarItems.map((item, index) => (
          <SidebarItem
            title={item.title}
            path={item.path}
            icon={item.icon}
            key={index}
          ></SidebarItem>
        ))}
      </ul>
    </div>
  );
};
