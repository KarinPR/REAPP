// pages/market/[id].js

import { useRouter } from 'next/router';

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

  // Ensure market data is available before rendering
  if (!market) return <div>Loading...</div>;

  return (
    <div>
      <h1>{market.name}</h1>
      <p>{market.description}</p>
    </div>
  );
}

export default MarketPage;
