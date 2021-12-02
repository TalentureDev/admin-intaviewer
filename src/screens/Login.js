import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from './../components/Message';
import Loader from './../components/Loader';
import { login } from '../redux/actions/actions.js';
import FormContainer from './../components/FormContainer';

const Login = ({ location, history }) => {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [brand_name, setBrand_name] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();


  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
  	if (userInfo?.user) {
  		history.push(redirect);
    } else {
      	history.push('/login');
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('there');
    if ( !email || !password ) {
      setMessage('Please fill all fields ');
    } else {
      dispatch(login(email, password));
    }
  };

  return (
    <FormContainer>
      <h1> Login</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email' className='mt-4'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='password' className='mt-4'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' variant='danger' className='mt-4'>
          Login
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Login;
