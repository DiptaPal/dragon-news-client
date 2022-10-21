import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp, FaDiscord } from "react-icons/fa";
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { AiOutlineFileText } from 'react-icons/ai';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const RightSideNav = () => {
    const {signInWithGoogle, signInWithGithub} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then((result) =>{
            navigate(from, { replace: true });
            toast.success("Login Success!", {autoClose: 1000})
        })
        .catch(error =>{
            toast.error(error.message, {autoClose: 1000})
        })
    }
    const handleGithubSignIN = () =>{
        signInWithGithub()
        .then((result) =>{
            navigate(from, { replace: true });
            toast.success("Login Success!", {autoClose: 1000})
        })
        .catch(error =>{
            toast.error(error.message, {autoClose: 1000})
        })
    }

    return (
        <div>
            <ButtonGroup vertical className='w-100'>
                <Button onClick={handleGoogleSignIn} className='mb-2 rounded-1' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGithubSignIN} variant="outline-dark" className='rounded-1'><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-5'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 border rounded-1'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border rounded-1'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border rounded-1'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border rounded-1'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border rounded-1'><FaDiscord /> Discord</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border rounded-1'><MdOutlinePrivacyTip /> Privacy Policy</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border rounded-1'><AiOutlineFileText /> Terms & Conditions</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;