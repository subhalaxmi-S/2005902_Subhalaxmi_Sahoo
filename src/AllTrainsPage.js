// AllTrainsPage.js
import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../api/trainApi';
import { Grid, Typography } from '@mui/material';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await getAllTrains();
        setTrains(response);
      } catch (error) {
        console.error('Error fetching trains:', error.message);
      }
    };

    fetchTrains();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          All Trains
        </Typography>
      </Grid>
      {trains.map((train) => (
        <Grid item xs={12} sm={6} md={4} key={train.trainNumber}>
          <Typography variant="h6">{train.trainName}</Typography>
          <Typography variant="body1">Train Number: {train.trainNumber}</Typography>
          <Typography variant="body1">
            Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}
          </Typography>
          <Typography variant="body1">
            Seats Available: Sleeper - {train.seatsAvailable.sleeper}, AC - {train.seatsAvailable.AC}
          </Typography>
          <Typography variant="body1">
            Price: Sleeper - {train.price.sleeper}, AC - {train.price.AC}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default AllTrainsPage;
