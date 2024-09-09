// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { FileAddTwoTone } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { FileAddTwoTone };

// ==============================|| MENU ITEMS - Ticket Management ||============================== //

const ticketManagement: NavItemType = {
    id: 'ticket-management',
    title: <FormattedMessage id="ticket-management" />,
    type: 'group',
    children: [
        {
            id: 'ticket-list',
            title: <FormattedMessage id="ticket-list" />,
            type: 'item',
            url: '/home/tickets',
            icon: icons.FileAddTwoTone,
        }
    ]
};

export default ticketManagement;
