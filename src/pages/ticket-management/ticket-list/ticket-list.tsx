import { Box, Button, Card, CardContent, CardMedia, Dialog, Grid, Typography } from '@mui/material';
import { PopupTransition } from 'components/@extended/Transitions';
import React, { useState } from 'react';
import AddEditBusinessNature from 'sections/ticket-management/ticket-list/index';

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
            <Box style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://t4.ftcdn.net/jpg/01/53/04/35/360_F_153043560_p3qkxC80rQaPmY2UOnwf7LoZmEop0LXf.jpg)', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Typography variant="h3" style={{ color: 'blue' }}>Win Big Every Month, Year, or On Demand!</Typography>
                <Button variant="contained" color="secondary" style={{ marginLeft: '20px' }}>Buy Tickets Now</Button>
            </Box>

            {/* Lottery Types */}
            <Grid container spacing={3} style={{ padding: '20px' }}>
                {['Monthly', 'Annual', 'On-Demand'].map((type) => (
                    <Grid item xs={12} sm={4} key={type}>
                        <Card onClick={handleAddEdit}
                            sx={{
                                cursor: 'pointer',
                                borderRadius: '20px',
                                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                                transition: '0.3s',
                                '&:hover': {
                                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.3)',
                                    transform: 'scale(1.02)',  // Slightly enlarges on hover
                                },
                            }}
                        >
                            <CardMedia style={{ height: '140px' }} image={`https://images.moneycontrol.com/static-mcnews/2020/07/rupee-653x435.jpg?impolicy=website&width=770&height=431`} />
                            <CardContent>
                                <Typography variant="h5">{`${type} Lottery`}</Typography>
                                <Typography>Price: $1</Typography>
                                <Typography>Next draw: 2024-12-07</Typography>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Grid item>

                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                                            Buy {type} Ticket
                                        </Button>
                                    </Grid>
                                </Grid>
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
