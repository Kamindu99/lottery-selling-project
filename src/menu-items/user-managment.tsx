// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { UserOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { UserOutlined };

// ==============================|| MENU ITEMS - User Management ||============================== //

const userManagement: NavItemType = {
    id: 'user-management',
    title: <FormattedMessage id="user-management" />,
    type: 'group',
    children: [
        {
            id: 'user-profile',
            title: <FormattedMessage id="user-profile" />,
            type: 'item',
            url: '/user-management/user-profile',
            icon: icons.UserOutlined,
        },
        // {
        //     id: 'user-list',
        //     title: <FormattedMessage id="user-list" />,
        //     type: 'item',
        //     url: '/home/users',
        //     icon: icons.UserOutlined,
        // }
    ]
};

export default userManagement;
