import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name && phone && email) {
      const userDetails = { name, phone, email };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      navigate('/secondpage');
    } else {
      alert('Please fill in all the fields before proceeding.');
    }
  };

  return (
    <Container maxWidth="sm"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', 
    }}
    >
      <Typography variant='h3' style={{margin : '5px'}}>Welcome to FirstPage</Typography>
      <TextField
        label="Name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Phone Number"
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default Home;
