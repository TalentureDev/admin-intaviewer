import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { USER_UPDATE_PROFILE_RESET } from '../redux/constants/constants.js';
import { LinkContainer } from 'react-router-bootstrap';
import { getUser, updateUserProfile } from '../redux/actions/actions.js';
import FormContainer from './../components/FormContainer';
import { Link } from 'react-router-dom';

const UserProfile = ({ location, history, match }) => {

    const userId = match.params.id;

    
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { user, loading, error } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

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
     }
   }
 }, [userId, userInfo, dispatch, history, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    // if () {
    //   setMessage('password do not match');
    // } else {
    dispatch(updateUserProfile({ id: user.user._id, first_name, last_name, email }));
    // }
  };

  return (
   <>
      <Link to='/admin/users' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h2>User Profile</h2>
        {/* {success && <Message variant='success'>Profile Updated</Message>} */}
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
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
          <Button type='submit' variant='danger' className='mt-3'>
            Update
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default UserProfile;
