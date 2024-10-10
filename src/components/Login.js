import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {

    console.log(username, password);
    // Login API integration
    axios.post('http://localhost:5000/login', {username, password}).then((result)=>{
      console.log(result);
      navigate('/dashboard'); 
    }).catch((error)=>{
      //console.log(error.response.data)
    });;
  };

  return (
    <div>
      <Typography variant="h2">Login</Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          Login
        </Button>
    </div>
  );
};

export default Login;