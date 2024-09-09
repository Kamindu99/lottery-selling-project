// project import
import home from './home';

// types
import { NavItemType } from 'types/menu';
import ticketManagement from './ticket-management';
import userManagement from './user-managment';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [home, ticketManagement, userManagement]
};

export default menuItems;
