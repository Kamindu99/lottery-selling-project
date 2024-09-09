// material-ui
import {
    Box,
    Grid,
    Typography
} from '@mui/material';
//import { Stack } from '@mui/system';
import { List, ListItemButton, ListItemText, Stack } from '@mui/material';
import MainCard from 'components/MainCard';

// project import
// project import
import AnalyticsDataCard from 'components/cards/statistics/AnalyticsDataCard';
import Chart from 'react-apexcharts';

// ==============================|| DASHBOARD - ANALYTICS ||============================== //

const DashboardAnalytics = () => {
    const dummyData = [
        { status: 'Draft', count: 5 },
        { status: 'Pending', count: 10 },
        { status: 'Done', count: 20 },
        { status: 'Complete', count: 15 },
        { status: 'Reject', count: 8 },
    ];
    const chartOptions = {
        labels: dummyData.map(item => item.status),
    };

    const chartSeries = dummyData.map(item => item.count);


    return (
        <Grid container rowSpacing={4.5} columnSpacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticsDataCard title="Total Users" count="15" percentage={25} children={undefined} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticsDataCard title="Total Members" count="45" percentage={90} isLoss color="warning" children={undefined} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticsDataCard title="Total Fixed Assets" count="100" percentage={27.4} isLoss color="warning" children={undefined} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticsDataCard title="Total Loans" count="5" percentage={70.5} children={undefined} />
            </Grid>

            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">1 Million Drop Overview</Typography>
                    </Grid>
                </Grid>
                <MainCard content={false} sx={{ mt: 2 }}>
                    <Box sx={{ pt: 1 }}>
                        <Chart
                            options={chartOptions}
                            series={chartSeries}
                            type="pie"
                            width="100%"
                            height="435"
                        />
                    </Box>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Page Views by Page Title</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
                        <ListItemButton divider>
                            <ListItemText
                                primary={<Typography variant="subtitle1">Admin Home</Typography>}
                                secondary={
                                    <Typography color="textSecondary" sx={{ display: 'inline' }}>
                                        /demo/admin/index.html
                                    </Typography>
                                }
                            />
                            <Stack alignItems="flex-end">
                                <Typography variant="h5" color="primary">
                                    7755
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    31.74%
                                </Typography>
                            </Stack>
                        </ListItemButton>
                        <ListItemButton divider>
                            <ListItemText
                                primary={<Typography variant="subtitle1">Form Elements</Typography>}
                                secondary={
                                    <Typography color="textSecondary" sx={{ display: 'inline' }}>
                                        /demo/admin/forms.html
                                    </Typography>
                                }
                            />
                            <Stack alignItems="flex-end">
                                <Typography variant="h5" color="primary">
                                    5215
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ display: 'block' }}>
                                    28.53%
                                </Typography>
                            </Stack>
                        </ListItemButton>
                        <ListItemButton divider>
                            <ListItemText
                                primary={<Typography variant="subtitle1">Utilities</Typography>}
                                secondary={
                                    <Typography color="textSecondary" sx={{ display: 'inline' }}>
                                        /demo/admin/util.html
                                    </Typography>
                                }
                            />
                            <Stack alignItems="flex-end">
                                <Typography variant="h5" color="primary">
                                    4848
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ display: 'block' }}>
                                    25.35%
                                </Typography>
                            </Stack>
                        </ListItemButton>
                        <ListItemButton divider>
                            <ListItemText
                                primary={<Typography variant="subtitle1">Form Validation</Typography>}
                                secondary={
                                    <Typography color="textSecondary" sx={{ display: 'inline' }}>
                                        /demo/admin/validation.html
                                    </Typography>
                                }
                            />
                            <Stack alignItems="flex-end">
                                <Typography variant="h5" color="primary">
                                    3275
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ display: 'block' }}>
                                    23.17%
                                </Typography>
                            </Stack>
                        </ListItemButton>
                        <ListItemButton divider>
                            <ListItemText
                                primary={<Typography variant="subtitle1">Modals</Typography>}
                                secondary={
                                    <Typography color="textSecondary" sx={{ display: 'inline' }}>
                                        /demo/admin/modals.html
                                    </Typography>
                                }
                            />
                            <Stack alignItems="flex-end">
                                <Typography variant="h5" color="primary">
                                    3003
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ display: 'block' }}>
                                    22.21%
                                </Typography>
                            </Stack>
                        </ListItemButton>
                    </List>
                </MainCard>
            </Grid>
            {/* <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Recent Projects</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <ProjectList />
                </MainCard>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Project's Summary</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <Stack spacing={3} sx={{ mt: 2 }}>
                    <LabelledTasks />
                </Stack>
            </Grid> */}
        </Grid>
    );
};

export default DashboardAnalytics;
