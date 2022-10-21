import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const {logIn, setLoader} = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    

    let from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
        .then((result) =>{
            setError('')
            form.reset()
            if(result.user.emailVerified){
                navigate(from, { replace: true });
                toast.success("Log in success!", {autoClose: 1000})
            }
            else{
                navigate('/login')
                toast.error("Please verify your email!", {autoClose: 1000})
            }
        })
        .catch(error => {
            setError(error.message)
            toast.error(error.message, {autoClose: 1000})
        })
        .finally(() => {
            setLoader(false)
        })
    }

    return (
        <Form onSubmit={handleLogin} className='border p-4 rounded-1 w-75 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>

            <Form.Text className="text-danger mb-1 d-block">
                {error}
            </Form.Text>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;