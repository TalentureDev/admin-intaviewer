import React, {useEffect} from 'react';
import { Navbar, Nav, Container, NavDropdown, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../actions/userActions';
import SearchBox from './SearchBox';
import { getUsers, getUser } from '../redux/actions/actions.js';

const Header = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    // if (!isLoggedIn()) {
    //   const redirect = props.history.location.search ? props.history.location.search.split('=')[1] : '/';
    //   const path = redirect.split('&')[0];
    //   console.log(path, 'path header');
    //   if (path === 'plans') {
    //     props.history.push(`${AppRoute.LOGIN}?redirect=plans`);
    //   } else {
    //     props.history.push(`${AppRoute.LOGIN}`);
    //   }
    // } else {
    //   props.getUserProfile().then((res) => {
    //     localStorage.setItem('room_name', res.room.name);
    //   });
    // }
  }, []);

  

  return (
    <header>
      {/* <Navbar bg='light' variant='dark' expand='lg' collapseOnSelect> */}
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <Nav.Item>
            <Nav.Link href='/'>
              <Navbar.Brand>Intaviewer</Navbar.Brand>
            </Nav.Link>
          </Nav.Item>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* <Nav.Item> <Nav.Link render={ ({ history }) => <SearchBox history={ history } /> }>  </Nav.Link> </Nav.Item> */}

            <Nav className='ml-auto'>
              <Nav.Item>
                <Nav.Link onClick={dispatch(getUser('5f1e86cf87482e0017d2e665'))} href='/admin/profile/5f1e86cf87482e0017d2e665/edit'>
                  Profile{' '}
                </Nav.Link>
              </Nav.Item>

              <NavDropdown title='Dropdown' id='adminmenu'>
                {/* <Dropdown.Item href='/admin/profile/:id'>Profile</Dropdown.Item> */}
                <Dropdown.Item onClick={dispatch(getUsers())} href='/admin/users'>
                  Users
                </Dropdown.Item>
                <Dropdown.Item href='/admin/brands'>Brands</Dropdown.Item>
                <Dropdown.Item href='/admin/register'>Register User</Dropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
