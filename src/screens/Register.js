import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from './../components/Message';
import Loader from './../components/Loader';
import { register } from '../redux/actions/actions.js';
import FormContainer from './../components/FormContainer';

const Register = ({ location, history }) => {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [brand_name, setBrand_name] = useState('');
	const [confirm_password, setConfirm_password] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	// const userRegister = useSelector((state) => state.userRegister);
	// const { userInfo, loading, error } = userRegister;

	// const redirect = location.search ? location.search.split('=')[1] : '/';

	// useEffect(() => {
	// 	if (userInfo) {
	// 		history.push(redirect);
	// 	}
	// }, [history, userInfo, redirect]);

	const submitHandler = (e) => {
        e.preventDefault();
        console.log("there")
		if (password !== confirm_password) {
			setMessage('password do not match');
		} else if (!first_name || !last_name || !brand_name || !email || !password || !confirm_password) {
      setMessage('Please fill all fields ');
    } else {
      dispatch(register(first_name, last_name, brand_name, email, password, confirm_password));
    }
	};

	return (
    <FormContainer>
      <h1> REGISTER USER</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {/* {error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />} */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='firstname'>
          <Form.Label>First Name</Form.Label>
          <Form.Control type='name' placeholder='Enter first name' value={first_name} onChange={(e) => setFirst_name(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='lastname' className='mt-4'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type='name' placeholder='Enter Last name' value={last_name} onChange={(e) => setLast_name(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='brand name' className='mt-4'>
          <Form.Label>Brand Name</Form.Label>
          <Form.Control
            type='brand name'
            placeholder='Enter Brand Name'
            value={brand_name}
            onChange={(e) => setBrand_name(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email' className='mt-4'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='password' className='mt-4'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirm password' className='mt-4'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirm_password}
            onChange={(e) => setConfirm_password(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='danger' className='mt-4'>
          Register
        </Button>

        {/* <Row className='py-3'>
					<Col>
						Have an account ?{' '}
						<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
							Login
						</Link>{' '}
					</Col>
				</Row> */}
      </Form>
    </FormContainer>
  );
};

export default Register;
