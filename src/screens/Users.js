import React, { useEffect } from 'react';
import { Button, Table, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from './../components/Message';
import Loader from './../components/Loader';
//import Paginate from './../components/Paginate';
import { LinkContainer } from 'react-router-bootstrap';
import { getUsers } from '../redux/actions/actions.js'

const Users = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();

    const pages = 1
    const page =  3
    const userList = useSelector((state) => state.userList);
    const { users, loading, error } = userList;
    

   useEffect(() => {

     if (!users) {
      dispatch(getUsers());
     }
  }, [dispatch, history, users]);
  
   

  const deleteProductHandler = (id) => {
    // if (window.confirm('Are you sure')) {
    //   dispatch(deleteProduct(id));
    // }
  };

  const createProductHandler = () => {
  //  dispatch(createProduct());
  };

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Users</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' variant='danger' href="/admin/register" onClick={createProductHandler}>
            Register User
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID </th>
                <th>FIRST NAME </th>
                <th>LAST NAME </th>
                <th>ROLE</th>
                <th>BRAND </th>

                <th> </th>
              </tr>
            </thead>
            <tbody>
              {users?.data?.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.role} </td>
                  <td>{user.brand_name}</td>
                  <td>
                    <LinkContainer to={`/admin/profile/${user._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button variant='danger' className='btn-sm' onClick={() => deleteProductHandler(user._id)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
        </>
      )}
    </>
  );
};

export default Users;
