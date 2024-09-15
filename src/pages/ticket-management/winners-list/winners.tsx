import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Button, TextField, MenuItem } from '@mui/material';

const WinnersPage: React.FC = () => {
    return (
        <Box sx={{ padding: '20px', minHeight: '100vh' }}>
            <Grid container spacing={2}>
                {/* Check My Numbers Section */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{ padding: '20px', background: '#dadae0', color: 'black', borderRadius: '20px' }}>
                        <Typography variant="h5" gutterBottom>
                            Check My Numbers
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Are you holding on to a winning ticket? Here's an easy way to find out.
                        </Typography>
                        <TextField
                            label="Enter Contest No"
                            variant="outlined"
                            fullWidth
                            sx={{ borderRadius: '10px', background: '#adadad', marginBottom: '15px', color: 'black' }}
                            InputLabelProps={{ style: { color: 'black' }, shrink: true }}
                        />
                        <Typography variant="body1">Enter Your Lottery Numbers</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                            {[...Array(6)].map((_, index) => (
                                <TextField
                                    key={index}
                                    variant="outlined"
                                    sx={{ width: '50px', background: '#adadad', borderRadius: '10px', color: 'black' }}
                                    inputProps={{ maxLength: 2 }}
                                    InputLabelProps={{ style: { color: '#ffffff99' } }}
                                />
                            ))}
                        </Box>
                        <TextField
                            select
                            fullWidth
                            sx={{ borderRadius: '10px', background: '#adadad', marginBottom: '15px' }}
                            value="Last 7 days"
                        >
                            <MenuItem value="Last 7 days">Last 7 days</MenuItem>
                            <MenuItem value="Last 30 days">Last 30 days</MenuItem>
                        </TextField>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundImage: 'linear-gradient(45deg, #ff6b6b, #f065c5)',
                                borderRadius: '30px',
                                padding: '10px',
                            }}
                        >
                            CHECK MY NUMBERS
                        </Button>
                    </Card>
                </Grid>

                {/* Winning Cards Section */}
                <Grid item xs={12} sm={8}>
                    {[1, 2].map((_, index) => (
                        <Card key={index} sx={{ marginBottom: '20px', borderRadius: '20px', backgroundColor: '#6d8cc2' }}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={`https://cdn-01.cms-ap-v2i.applyflow.com/pinnacle-people/wp-content/uploads/2023/09/slide-2.png`}
                                        alt="Lottery Car"
                                        style={{ width: '150px', marginRight: '20px' }}
                                    />
                                    <Box>
                                        <Typography variant="h5" gutterBottom>
                                            The Breeze Zodiac IX
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            Draw took place on
                                        </Typography>
                                        <Typography variant="body2" color="lime">
                                            Saturday April 20, 2023
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography variant="h6">Contest No: B2T</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                        {[11, 88, 23, 9, 19, 26, 87].map((num, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    width: '35px',
                                                    height: '35px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(45deg, #ff6b6b, #f065c5)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 5px',
                                                }}
                                            >
                                                <Typography variant="body1">{num}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default WinnersPage;
