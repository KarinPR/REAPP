import { useRouter } from 'next/router';
import { Box, Divider, Typography } from '@mui/material';

function MarketPage() {
  const router = useRouter();
  const { id } = router.query;

  // Here, you can fetch the data for the specific market using the `id`.
  // For demonstration purposes, I'll use sample data.

  const market = {
    id: '1',
    name: 'Market A',
    description: 'Detailed information about Market A'
  };

  // Mock news data; replace with actual data from your backend or API
  const newsData = [
    { title: 'News 1', summary: 'Summary of news 1' },
    { title: 'News 2', summary: 'Summary of news 2' },
    // ... add more news items

  ];

  // Mock agent data; replace with actual data from your backend or API

  const agentsData = [
    {
      id: 'agent1',
      name: 'John Doe',
      contact: '123-456-7890',
      email: 'john@example.com',
      description: 'Experienced agent with 5 years in the industry.',
    },
    {
      id: 'agent2',
      name: 'Jane Smith',
      contact: '987-654-3210',
      email: 'jane@example.com',
      description: 'Specializes in luxury properties and condos.',
    },
    // ... add more agents
  ];

  // Mock listing data; replace with actual data from your backend or API

  const listingsData = [
    {
      id: 'listing1',
      propertyName: 'Sunny Apartment',
      location: 'Downtown',
      price: '$300,000',
      description: '2BHK apartment with a great view of the city.',
    },
    {
      id: 'listing2',
      propertyName: 'Luxury Villa',
      location: 'Beachside',
      price: '$1,500,000',
      description: '4BHK villa with a private beach.',
    },
    // ... add more listings
  ];

  // Ensure market data is available before rendering
  if (!market) return <div>Loading...</div>;

  return (
    <div>
      <h1>{market.name}</h1>
      <p>{market.description}</p>

      
    {/* News Section */}
      <Box mt={4}>
        <Typography variant="h5">Latest News</Typography>
        <Divider />
        {/* Mock news data; replace with actual data from your backend or API */}
        {newsData.map((newsItem, index) => (
          <Box key={index} mt={2}>
            <Typography variant="h6">{newsItem.title}</Typography>
            <Typography variant="body2">{newsItem.summary}</Typography>
          </Box>
        ))}
      </Box>

    {/* End News Section */}

    {/* Agents Section */}
      <Box mt={4}>
        <Typography variant="h5">Top Agents</Typography>
        <Divider />
        {/* Mock agents data; replace with actual data from your backend or API */}
        {agentsData.map((agent, index) => (
          <Box key={index} mt={2}>
            <Typography variant="h6">{'Name: agent.name'}</Typography>
            <Typography variant="body2">{agent.description}</Typography>
          </Box>
        ))}
      </Box>

    {/* End Agents Section */ }

    {/* Listings Section */}

      <Box mt={4}>
        <Typography variant="h5">Current Listings</Typography>
        <Divider />
        {/* Mock listings data; replace with actual data from your backend or API */}
        {listingsData.map((listing, index) => (
          <Box key={index} mt={2}>
            <Typography variant="h6">{listing.propertyName}</Typography>
            <Typography variant="body2">{listing.description}</Typography>
          </Box>
        ))}
      </Box>

    {/* End Listings Section */}

    {/*  CRM Section */}
      {/*  This section can be a dashboard or a set of tools for customer relationship management. 
      Depending on your requirements, this can be a complex feature. For now, let's create a placeholder.*/}
      
      <Box mt={4}>
        <Typography variant="h5">CRM Tools</Typography>
        <Divider />
        <Box mt={2}>
          <Typography variant="body2">CRM features and tools will be integrated here.</Typography>
        </Box>
      </Box>


    {/* End CRM Section */}

    </div>
  );
}

export default MarketPage;
