import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
// import { updateUserProfile } from '../actions/userActions';
// import { USER_UPDATE_PROFILE_RESET } from './../constants/userConstants';
// import { listMyOrders } from '../actions/orderActions';
import { LinkContainer } from 'react-router-bootstrap';
import { getUser } from '../redux/actions/actions';
import FormContainer from './../components/FormContainer';

const Profile = ({ location, history, match }) => {
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo : { user } , loading, error } = userDetails;

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
//   const { success } = userUpdateProfile;

    console.log(user, "history")

  console.log(match.params.id, 'match.params.id');

  useEffect(() => {
      if (!user) {
          dispatch(getUser(match.params.id));
      } else {
          console.log("fjdbjbdf");
          setfirst_name(user.first_name);
          setlast_name(user.last_name);
          setEmail(user.email);
      ;
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('password do not match');
    } else {
     // dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <FormContainer>
        <h2>User Profile</h2>
        {/* {success && <Message variant='success'>Profile Updated</Message>}
        {message && <Message variant='danger'>{message}</Message>} */}
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
          <Form.Group controlId='password' className='mt-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='confirm password' className='mt-3'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type='submit' variant='danger' className='mt-3'>
            Update
          </Button>
      </Form>
      </FormContainer>
  );
};

export default Profile;
