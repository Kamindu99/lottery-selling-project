import { Box, Button, Card, CardContent, CardMedia, Dialog, Grid, Typography } from '@mui/material';
import { PopupTransition } from 'components/@extended/Transitions';
import React, { useState } from 'react';
import AddEditBusinessNature from 'sections/ticket-management/ticket-list/ticket-booking-form';

const HomePage: React.FC = () => {
    //dialog model 
    const [addEdit, setAddEdit] = useState<boolean>(false);
    const [businessNatureCode, setBusinessNatureCode] = useState();

    const handleAddEdit = () => {
        setAddEdit(!addEdit);
        if (businessNatureCode && !addEdit) setBusinessNatureCode(undefined);
    };
    return (
        <>
            {/* Hero Section */}
            <Box style={{ backgroundImage: 'url(/lottery-bg.jpg)', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Typography variant="h3" style={{ color: 'blue' }}>Win Big Every Month, Year, or On Demand!</Typography>
                <Button variant="contained" color="secondary" style={{ marginLeft: '20px' }}>Buy Tickets Now</Button>
            </Box>

            {/* Lottery Types */}
            <Grid container spacing={3} style={{ padding: '20px' }}>
                {['Monthly', 'Annual', 'On-Demand'].map((type) => (
                    <Grid item xs={12} sm={4} key={type}>
                        <Card onClick={handleAddEdit}>
                            <CardMedia style={{ height: '140px' }} image={`https://images.moneycontrol.com/static-mcnews/2020/07/rupee-653x435.jpg?impolicy=website&width=770&height=431`} />
                            <CardContent>
                                <Typography variant="h5">{`${type} Lottery`}</Typography>
                                <Typography>Next draw: Date goes here</Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                                    Buy {type} Ticket
                                </Button>
                            </CardContent>
                        </Card>
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
    );
};

export default HomePage;
