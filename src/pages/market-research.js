import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const markets = [
  // Sample data; replace with actual data from your backend or API
  { id: 1, name: 'Market A', summary: 'Brief summary of Market A', growthRate: 5.2 },
  { id: 2, name: 'Market B', summary: 'Brief summary of Market B', growthRate: 3.8 },
  // ... add more markets
];

const MarketResearch = () => {
  console.log("Top Markets Data:", markets);
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Top Markets
      </Typography>
      <Grid container spacing={3}>
        {markets.map((market) => (
          <Grid item xs={12} sm={6} md={4} key={market.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{market.name}</Typography>
                <Typography variant="body2">{market.summary}</Typography>
                <Typography variant="subtitle2">Growth Rate: {market.growthRate}%</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MarketResearch;
