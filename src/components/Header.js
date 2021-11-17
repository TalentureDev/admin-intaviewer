import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../actions/userActions';
import SearchBox from './SearchBox';

const Header = () => {
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

  //   const isIpad = useMediaQuery({ query: '(max-width: 900px)' });
  //   const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  //   const isBigger = useMediaQuery({ query: '(max-width: 1412px)' });

  //   const openNav = () => {
  //     document.getElementById('sideNav').style.width = isMobile ? '90%' : isIpad ? '350px' : isBigger ? '350px' : '350px';
  //   };
  // const user = props.response;
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
                <Nav.Link href='/profile'>
                  Profile <i className='fas fa-shopping-cart'></i>{' '}
                </Nav.Link>
              </Nav.Item>
              {/* {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown> */}
              {/* ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    Sign In <i className='fas fa-user'></i>
                  </Nav.Link>
                </LinkContainer>
              )} */}

              <NavDropdown title='Dropdown' id='adminmenu'>
                <Nav.Item to='/admin/users'>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </Nav.Item>
                <Nav.Item to='/admin/registerUser'>
                  <NavDropdown.Item>Register User</NavDropdown.Item>
                </Nav.Item>
                <Nav.Item to='/admin/subscription'>
                  <NavDropdown.Item>Subscription</NavDropdown.Item>
                </Nav.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
