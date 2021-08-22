import { SidebarItemProps } from "../components/Sidebar/SidebarItem/SidebarItem";
import { Paths } from "../router/paths";

export const sidebarItems: SidebarItemProps[] = [
  {
    title: 'Dashboard',
    path: Paths.START_PAGE,
    icon: 'bx bxs-dashboard'
  },
  {
    title: 'Categories',
    path: Paths.START_PAGE,
    icon: 'bx bxs-collection',
  }
];
