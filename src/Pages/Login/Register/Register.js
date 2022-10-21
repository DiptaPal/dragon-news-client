import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                toast.success("Account created!", { autoClose: 1000 })
                form.reset()
                setError('')
                console.log(result.user);
                navigate('/login')
                handleUpdateUserProfile(name, photoURL)
                handleEmailVerification()
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
                toast.error(error.message, { autoClose: 1000 })
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {displayName: name, photoURL: photoURL}

        updateUserProfile(profile)
            .then(() => {})
            .catch(error => console.log(error))
    }

    const handleEmailVerification = () => { 
        verifyEmail()
            .then(() => {
                toast.success("Email verification sent!", { autoClose: 1000 })
            })
            .catch(error => {
                toast.error(error.message, { autoClose: 1000 })
            })
    }

    const  handleAccepted = event => {
        setAccept(event.target.checked)
    }

    return (
        <Form onSubmit={handleRegister} className='border p-4 rounded-1 w-75 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Photo URL" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                    type="checkbox"
                    onClick={handleAccepted} 
                    label={<>Accept <Link to='/terms-and-conditions'>Terms and conditions</Link></>} />
            </Form.Group>

            <Form.Text className="text-danger mb-1 d-block">
                {error}
            </Form.Text>
            <Button variant="primary" type="submit" disabled={!accept}>
                Login
            </Button>
        </Form>
    );
};

export default Register;