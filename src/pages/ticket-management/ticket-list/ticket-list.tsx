// material-ui
import {
    Dialog,
    Grid,
    useTheme
} from '@mui/material';

// project imports

// assets
import {
    DollarCircleFilled
} from '@ant-design/icons';
import EcommerceMetrix from 'components/cards/statistics/EcommerceMetrix';
import { PopupTransition } from 'components/@extended/Transitions';
import AddEditBusinessNature from 'sections/ticket-management/ticket-list/ticket-booking-form';
import { useState } from 'react';

// ==============================|| TicketList ||============================== //

const TicketList = () => {
    const theme = useTheme();

    const ticketList = [
        {
            id: '1',
            title: 'Monthly Winning',
            price: '$5',
            available: '998 available',
            color: theme.palette.primary.main,
            icon: DollarCircleFilled
        },
        {
            id: '2',
            title: 'Annually Winning',
            price: '$1',
            available: '8756 available',
            color: theme.palette.warning.main,
            icon: DollarCircleFilled
        },
        {
            id: '3',
            title: 'On Demand',
            price: '$1',
            available: '100 available',
            color: theme.palette.success.main,
            icon: DollarCircleFilled
        }
    ];

    //dialog model 
    const [addEdit, setAddEdit] = useState<boolean>(false);
    const [businessNatureCode, setBusinessNatureCode] = useState();

    const handleAddEdit = () => {
        setAddEdit(!addEdit);
        if (businessNatureCode && !addEdit) setBusinessNatureCode(undefined);
    };

    return (
        <>
            <Grid container spacing={3}>
                {ticketList.map((item) => (
                    <Grid item xs={12} lg={4} sm={6} key={item.id}>
                        <EcommerceMetrix
                            primary={item.title}
                            secondary={item.price}
                            content={item.available}
                            color={item.color}
                            iconPrimary={item.icon}
                            onClick={handleAddEdit}
                        />
                    </Grid>
                ))}
            </Grid>
            <Dialog
                maxWidth="sm"
                TransitionComponent={PopupTransition}
                keepMounted
                fullWidth
                onClose={handleAddEdit}
                open={addEdit}
                sx={{ '& .MuiDialog-paper': { p: 0 }, transition: 'transform 225ms' }}
                aria-describedby="alert-dialog-slide-description"
            >
                <AddEditBusinessNature onCancel={handleAddEdit} />
            </Dialog>
        </>
    )
};

export default TicketList;
