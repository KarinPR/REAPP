import Link from 'next/link';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function ProfilePage() {
  // Sample user data; replace with actual data from your backend or API
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  // Sample saved markets data; replace with actual data from your backend or API
  const savedMarkets = [
    { id: '1', name: 'Market A' },
    { id: '2', name: 'Market B' },
    // ... add more saved markets
  ];

  return (
    <Typography variant="h6">
      {/* User Details */}
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>

      {/* Saved Markets */}
      <h2>Saved Markets</h2>
      <ul>
        {savedMarkets.map((market) => (
          <li key={market.id}>
            <Link href={`/market/${market.id}`}>
              <a>{market.name}</a> {/* Wrap the market name with an <a> tag */}
            </Link>
          </li>
        ))}
      </ul>
    </Typography>
  );
}

export default ProfilePage;
