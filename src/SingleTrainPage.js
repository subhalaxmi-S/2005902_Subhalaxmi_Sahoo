// SingleTrainPage.js
import React, { useEffect, useState } from 'react';
import { getTrainDetails } from '../api/trainApi';
import { Grid, Typography } from '@mui/material';

const SingleTrainPage = ({ trainNumber }) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrainDetails = async () => {
      try {
        const response = await getTrainDetails(trainNumber);
        setTrain(response);
      } catch (error) {
        console.error('Error fetching train details:', error.message);
      }
    };

    fetchTrainDetails();
  }, [trainNumber]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Train Details
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
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
    </Grid>
  );
};

export default SingleTrainPage;
