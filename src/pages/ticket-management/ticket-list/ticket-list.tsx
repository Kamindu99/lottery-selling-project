// material-ui
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports

// assets
import {
    DollarCircleFilled,
    ScheduleFilled,
    ShoppingFilled
} from '@ant-design/icons';
import EcommerceMetrix from 'components/cards/statistics/EcommerceMetrix';

// types

// ==============================|| TicketList ||============================== //

const TicketList = () => {
    const theme = useTheme();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={4} sm={6}>
                    <EcommerceMetrix
                        primary="Monthly Winning"
                        secondary="$5"
                        content="998 available"
                        color={theme.palette.primary.main}
                        iconPrimary={DollarCircleFilled}
                    />
                </Grid>
                <Grid item xs={12} lg={4} sm={6}>
                    <EcommerceMetrix
                        primary="Annually Winning"
                        secondary="$1"
                        content="8756 available"
                        color={theme.palette.warning.main}
                        iconPrimary={ScheduleFilled}
                    />
                </Grid>
                <Grid item xs={12} lg={4} sm={12}>
                    <EcommerceMetrix
                        primary="On Demand"
                        secondary="$1"
                        content="100 available"
                        color={theme.palette.success.main}
                        iconPrimary={ShoppingFilled}
                    />
                </Grid>
            </Grid>
        </>
    )
};

export default TicketList;
