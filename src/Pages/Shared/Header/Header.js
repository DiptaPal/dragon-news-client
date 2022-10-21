import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogOut = () =>{
        logOut()
        .then(() =>{
            toast.info("Log out success!", {autoClose: 1000});
            navigate('/login')
        })
        .catch(error =>{
            toast.error(error.message, {autoClose: 1000})
        })
    }

    return (
        <div className='mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
                <Container>
                    <Navbar.Brand className='text-white'><Link className='text-decoration-none text-white' to='/'>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" className='text-white'>All News</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user?.uid ?
                                    <>
                                        <Link to='/profile' className='text-white'>
                                            {
                                                user?.photoURL ?
                                                    <Image roundedCircle src={user.photoURL} style={{ height: "30px", width: "30px" }}></Image>
                                                    :
                                                    <FaUserAlt></FaUserAlt>
                                            }
                                        </Link>
                                        <Nav.Link href="#deets" className='text-white'>{user?.displayName}</Nav.Link>
                                        <Nav.Link className='text-white'><button onClick={handleLogOut} className='border-0 ms-3 rounded-1 bg-primary px-2 text-white'>Log Out</button></Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Link to="/login" className='text-white text-decoration-none me-3'>Login</Link>
                                        <Link to="/register" className='text-white text-decoration-none rounded-1 bg-primary px-2 text-white'>Register</Link>
                                    </>
                            }
                        </Nav>
                        <div className='d-block d-lg-none text-white'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;