import { NavbarItemProps } from "../components/Navbar/NavbarItems/NavbarItem";
import { Paths } from "../router/paths";

export const navbarItems: NavbarItemProps[] = [
  {
    title: 'Home',
    path: Paths.START_PAGE,
  },
  {
    title: 'App',
    path: Paths.APP_PAGE,
  },
];
