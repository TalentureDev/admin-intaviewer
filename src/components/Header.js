import React, {useEffect} from 'react';
import { Navbar, Nav, Container, NavDropdown, Dropdown } from 'react-bootstrap';
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
                <Nav.Link href='/admin/profile'>
                  Profile <i className='fas fa-shopping-cart'></i>{' '}
                </Nav.Link>
              </Nav.Item>

              <NavDropdown title='Dropdown' id='adminmenu'>
                <Dropdown.Item href='/admin/profile'>Peofile</Dropdown.Item>
                <Dropdown.Item href='/admin/users'>Users</Dropdown.Item>
                <Dropdown.Item href='/admin/brands'>Brands</Dropdown.Item>
                <Dropdown.Item href='/admin/register'>Register</Dropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
