import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';

const Register = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    // Register API integration
    axios.post('http://localhost:5000/register', {username, email, password}).then((result)=>{
      console.log(result)
      navigate('/login'); 
    }).catch((error)=>{
      //console.log(error.response.data)
    });
  };

  return (
    <div>
      <Typography variant="h2">Register</Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Register
        </Button>
    </div>
  );
};

export default Register;