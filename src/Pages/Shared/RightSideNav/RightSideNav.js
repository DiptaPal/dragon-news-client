import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp, FaDiscord } from "react-icons/fa";
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { AiOutlineFileText } from 'react-icons/ai';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical className='w-100'>
                <Button className='mb-2 rounded-1' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark" className='rounded-1'><FaGithub></FaGithub> Login with Github</Button>
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