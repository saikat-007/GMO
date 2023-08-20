import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import { UserDetails } from '../types';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';

const SecondPage = () => {
  const navigate = useNavigate();
  const userDetailsJSON = localStorage.getItem('userDetails');
  const userDetails: UserDetails | null = userDetailsJSON
    ? JSON.parse(userDetailsJSON) as UserDetails
    : null;

  const handleLogout = () => {
    localStorage.removeItem('userDetails');
    navigate('/');
  };
  useEffect(() => {
    if (!userDetails) {
      navigate('/');
    }
  }, [userDetails, history]);

  return (
    <Container >
      {userDetails ? (
        <div>
          <Typography variant="h5" style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            Welcome to the Second Page, {userDetails.name}!
            <Button variant="contained" color="secondary" onClick={handleLogout} style={{ marginLeft: '20px' }}>
              Logout
            </Button>
          </Typography>

        </div>
      ) : (
        <Typography variant="h5">Access Denied</Typography>
      )}
      <Component1 />
      <Component2 />
    </Container>
  );
};

export default SecondPage;
