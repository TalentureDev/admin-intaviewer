import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { UPDATE_USER_RESET } from '../redux/constants/constants.js';
import { LinkContainer } from 'react-router-bootstrap';
import { getUser, updateUserProfile } from '../redux/actions/actions.js';
import FormContainer from './../components/FormContainer';
import { Link } from 'react-router-dom';

const UserProfile = ({ location, history, match }) => {

    const userId = match.params.id;


  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [brand_name, setBrand_Name] = useState('');
    const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { user, loading, error } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    
    const userUpdate = useSelector((state) => state.userUpdate);
    const { loading: loadingUpdate, error: errorUpdate, success  } = userUpdate;

  console.log(match.params.id, 'match.params.id');

 useEffect(() => {
   if (!userInfo) {
     history.push('/login');
   } else {
     console.log(userInfo, 'djbjdbjbdcjd');
     console.log(user, 'djbjdbcd');
     if (!user?.user?.first_name || userId !== user.user._id) {
       dispatch(getUser(userId));
     } else {
       setfirst_name(user.user.first_name);
       setlast_name(user.user.last_name);
         setEmail(user.user.email);
         setRole(user.user.role);
         setPosition(user.user.position);
         setBrand_Name(user.user.brand_name);
         setPhone(user.user.phone);
     }
   }
 }, [userId, userInfo, dispatch, history, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ id: user.user._id, first_name, last_name, email, brand_name, phone, position, role }));
  };

  return (
    <>
      <Link to='/admin/users' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h2>User Profile</h2>
        {success && <Message variant='success'>Profile Updated</Message>}
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading && <Loader />}
        {loadingUpdate && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='firstname'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter first name'
              value={first_name}
              onChange={(e) => setfirst_name(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='lastname' className='mt-3'>
            <Form.Label> Last Name</Form.Label>
            <Form.Control type='name' placeholder='Enter last name' value={last_name} onChange={(e) => setlast_name(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='email' className='mt-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='position' className='mt-3'>
            <Form.Label> Position</Form.Label>
            <Form.Control type='position' placeholder='Enter position' value={position} onChange={(e) => setPosition(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='role' className='mt-3'>
            <Form.Label>Role</Form.Label>
            <Form.Control type='role' placeholder='Enter role' value={role} onChange={(e) => setRole(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='role' className='mt-3'>
            <Form.Label>Brand Name</Form.Label>
            <Form.Control
              type='brandName'
              placeholder='Enter brand name'
              value={brand_name}
              onChange={(e) => setBrand_Name(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='phone' className='mt-3'>
            <Form.Label>Phone</Form.Label>
            <Form.Control type='phone' placeholder='Enter phone' value={phone} onChange={(e) => setPhone(e.target.value)}></Form.Control>
          </Form.Group>
          <Button type='submit' variant='danger' className='mt-3'>
            Update
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default UserProfile;
