import React, {useEffect} from 'react';
import { Navbar, Nav, Container, NavDropdown, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import {LinkContainer} from "react-router-bootstrap"
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../actions/userActions';
import SearchBox from './SearchBox';
import { getUsers, getUser, logout } from '../redux/actions/actions.js';

const Header = ({props}) => {

  // useEffect(() => {
  //   // if (!isLoggedIn()) {
  //   //   const redirect = props.history.location.search ? props.history.location.search.split('=')[1] : '/';
  //   //   const path = redirect.split('&')[0];
  //   //   console.log(path, 'path header');
  //   //   if (path === 'plans') {
  //   //     props.history.push(`${AppRoute.LOGIN}?redirect=plans`);
  //   //   } else {
  //   //     props.history.push(`${AppRoute.LOGIN}`);
  //   //   }
  //   // } else {
  //   //   props.getUserProfile().then((res) => {
  //   //     localStorage.setItem('room_name', res.room.name);
  //   //   });
  //   // }
  // }, []);

  const userLoginDetails = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLoginDetails;



  const dispatch = useDispatch()



  const shortUrl = window.location.origin;
  console.log(shortUrl);



  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logout());

  };

  return (
    <header>
      {/* <Navbar bg='light' variant='dark' expand='lg' collapseOnSelect> */}
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Intaviewer</Navbar.Brand>
          </LinkContainer>
          {/* <Nav.Item>
            <Nav.Link href='/'>
              <Navbar.Brand>Intaviewer</Navbar.Brand>
            </Nav.Link>
          </Nav.Item> */}

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* <Nav.Item> <Nav.Link render={ ({ history }) => <SearchBox history={ history } /> }>  </Nav.Link> </Nav.Item> */}
            {userInfo && userInfo.user.isAdmin ? (
              <Nav className='ml-auto'>
                <LinkContainer to={`/admin/profile/${userInfo.user._id}/edit`}>
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>

                <NavDropdown title='Dropdown' id='adminmenu'>
                  {/* <Dropdown.Item href='/admin/profile/:id'>Profile</Dropdown.Item> */}
                  <LinkContainer to='/admin/users'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  {/* <LinkContainer to='/admin/brands'>
                    <NavDropdown.Item>Brands</NavDropdown.Item>
                  </LinkContainer> */}
                  <LinkContainer to='/admin/register'>
                    <NavDropdown.Item>Register User</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <Nav.Item>
                  <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                </Nav.Item>
              </Nav>
            ) : (
              <Nav className='ml-auto'>
                <LinkContainer to='/login'>
                  <Navbar.Brand>Sign In</Navbar.Brand>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
